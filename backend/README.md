# Backend API - Job Recruitment App

Backend API cho ứng dụng tuyển dụng việc làm, sử dụng Node.js, Express và Supabase.

## 🚀 Cài đặt

### 1. Cài đặt dependencies

```bash
cd backend
npm install
```

### 2. Cấu hình môi trường

Sao chép file `.env.example` thành `.env` và điền thông tin Supabase của bạn:

```bash
cp .env.example .env
```

Cập nhật các giá trị trong file `.env`:
- `SUPABASE_URL`: URL của Supabase project
- `SUPABASE_ANON_KEY`: Anon/Public key từ Supabase
- `SUPABASE_SERVICE_ROLE_KEY`: Service role key (cho admin operations)

### 3. Chạy server

**Development mode (với auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server sẽ chạy tại `http://localhost:3000`

## 📋 API Endpoints

### Health Check
- `GET /health` - Kiểm tra trạng thái server

### Authentication
- `POST /api/auth/signup` - Đăng ký tài khoản mới
- `POST /api/auth/signin` - Đăng nhập
- `POST /api/auth/signout` - Đăng xuất

### Jobs
- `GET /api/jobs` - Lấy danh sách công việc (có phân trang, tìm kiếm)
- `GET /api/jobs/:id` - Lấy chi tiết công việc
- `POST /api/jobs` - Tạo công việc mới (Recruiter)
- `PUT /api/jobs/:id` - Cập nhật công việc
- `DELETE /api/jobs/:id` - Xóa công việc

### Applications
- `GET /api/applications` - Lấy danh sách đơn ứng tuyển
- `GET /api/applications/:id` - Lấy chi tiết đơn ứng tuyển
- `POST /api/applications` - Nộp đơn ứng tuyển
- `PATCH /api/applications/:id/status` - Cập nhật trạng thái đơn

### Profiles
- `GET /api/profiles/:userId` - Lấy thông tin profile
- `PUT /api/profiles/:userId` - Cập nhật profile

### Messages
- `GET /api/messages/conversations` - Lấy danh sách cuộc trò chuyện
- `GET /api/messages/:conversationId` - Lấy tin nhắn trong cuộc trò chuyện
- `POST /api/messages` - Gửi tin nhắn

### Analytics
- `GET /api/analytics/recruiter/:recruiterId` - Lấy thống kê cho recruiter

## 🗄️ Database Schema (Supabase)

Bạn cần tạo các bảng sau trong Supabase:

### Table: `profiles`
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  location TEXT,
  bio TEXT,
  role TEXT CHECK (role IN ('candidate', 'recruiter')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Table: `jobs`
```sql
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recruiter_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  requirements TEXT,
  location TEXT,
  job_type TEXT CHECK (job_type IN ('full-time', 'part-time', 'contract', 'internship')),
  salary_min INTEGER,
  salary_max INTEGER,
  status TEXT CHECK (status IN ('active', 'draft', 'closed')) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Table: `applications`
```sql
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('pending', 'screening', 'interview', 'offer', 'rejected')) DEFAULT 'pending',
  resume_url TEXT,
  cover_letter TEXT,
  answers JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Table: `conversations`
```sql
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user1_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user2_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Table: `messages`
```sql
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔒 Security

- Sử dụng Helmet.js cho security headers
- CORS được cấu hình để chỉ cho phép origins được chỉ định
- Environment variables để bảo vệ sensitive data
- Supabase Row Level Security (RLS) nên được bật

## 📝 Notes

- API trả về JSON format với structure: `{ success: boolean, data?: any, message?: string }`
- Tất cả timestamps sử dụng ISO 8601 format
- Pagination sử dụng `page` và `limit` query parameters
- Error handling được xử lý globally

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **Supabase** - Backend as a Service (Database, Auth, Storage)
- **@supabase/supabase-js** - Supabase client
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **dotenv** - Environment variables management
