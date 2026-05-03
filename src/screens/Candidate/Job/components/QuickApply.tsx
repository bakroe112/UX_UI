import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { X, FileText, ChevronRight, Zap, PenTool, CircleCheckBig } from "lucide-react-native";

interface QuickApplyProps {
  onClose: () => void;
  navigation: any;
}

const QuickApply: React.FC<QuickApplyProps> = ({ onClose, navigation }) => {
  const [includeCoverLetter, setIncludeCoverLetter] = useState(false);

  return (
    <Modal transparent visible animationType="fade">
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlayTouchable} activeOpacity={1} onPress={onClose} />
        
        <View style={styles.bottomSheet}>
          {/* Handle bar */}
          <View style={styles.handleBar} />

          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.title}>Quick Apply</Text>
              <Text style={styles.subtitle}>Apply in 2 taps · Your info is pre-filled</Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <X size={16} color="#000000" />
            </TouchableOpacity>
          </View>

          {/* User profile card */}
          <View style={styles.profileCard}>
            <View style={styles.profileContent}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>LK</Text>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>Lucyna Kushinada</Text>
                <Text style={styles.profileDetails}>
                  lucy.k@gmail.com · {"\n"}linkedin.com/in/lucynakuchinada
                </Text>
              </View>
            </View>
            <View style={styles.verifiedBadge}>
              <CircleCheckBig size={12} color="#0A0A0A" />
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          </View>

          {/* Resume card */}
          <View style={styles.resumeCard}>
            <View style={styles.resumeContent}>
              <View style={styles.resumeIconContainer}>
                <FileText size={20} color="#0D5C63" />
              </View>
              <View style={styles.resumeInfo}>
                <Text style={styles.resumeTitle}>Resume_Lucy_Kushinada_2026.pdf</Text>
                <Text style={styles.resumeMeta}>Updated March 2026 · 2 pages</Text>
              </View>
            </View>
            <ChevronRight size={16} color="#8A88A8" />
          </View>

          {/* Cover letter toggle */}
          <View style={styles.coverLetterCard}>
            <View style={styles.coverLetterContent}>
              <PenTool size={16} color="#4A4868" />
              <Text style={styles.coverLetterText}>Add cover letter (optional)</Text>
            </View>
            <TouchableOpacity
              style={[styles.toggle, includeCoverLetter && styles.toggleActive]}
              onPress={() => setIncludeCoverLetter(!includeCoverLetter)}
            >
              <View style={[styles.toggleThumb, includeCoverLetter && styles.toggleThumbActive]} />
            </TouchableOpacity>
          </View>

          {/* Match banner */}
          <View style={styles.matchBanner}>
            <Zap size={20} color="#0D5C63" />
            <Text style={styles.matchText}>
              96% match — You're a top candidate for this role!
            </Text>
          </View>

          {/* Submit button */}
          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.submitButton} 
              onPress={() => {
                onClose();
                navigation.navigate("ApplyPersionalInfo");
              }}
            >
              <Text style={styles.submitButtonText}>Submit Application →</Text>
            </TouchableOpacity>
            <Text style={styles.footerNote}>
              You can withdraw anytime · View in My Applications
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#1C1A2E73",
    justifyContent: "flex-end",
  },
  overlayTouchable: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 21,
    paddingTop: 18,
    paddingBottom: 33,
    marginBottom: -20
  },
  handleBar: {
    width: 40,
    height: 0,
    borderTopWidth: 3,
    borderTopColor: "#0000001F",
    alignSelf: "center",
    marginBottom: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  title: {
    color: "#1A1828",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.5,
    lineHeight: 30,
  },
  subtitle: {
    color: "#8A88A8",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: 3,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#F3EFE9",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  profileCard: {
    height: 84,
    borderRadius: 14,
    backgroundColor: "#F3EFE9",
    paddingHorizontal: 17,
    paddingVertical: 13,
    marginBottom: 11,
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#E2B053",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
  },
  profileInfo: {
    marginLeft: 10,
    flex: 1,
  },
  profileName: {
    color: "#1A1828",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
  },
  profileDetails: {
    color: "#8A88A8",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: 1,
  },
  verifiedBadge: {
    position: "absolute",
    right: 17,
    top: 34,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  verifiedText: {
    color: "#0A0A0A",
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 16.5,
  },
  resumeCard: {
    height: 60,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#0D5C6312",
    paddingHorizontal: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 11,
  },
  resumeContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  resumeIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 13,
    backgroundColor: "#EBF6F7",
    justifyContent: "center",
    alignItems: "center",
  },
  resumeInfo: {
    marginLeft: 10,
    flex: 1,
  },
  resumeTitle: {
    color: "#1A1828",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 19.5,
  },
  resumeMeta: {
    color: "#8A88A8",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16.5,
    marginTop: 1,
  },
  coverLetterCard: {
    height: 60,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#0D5C6312",
    paddingHorizontal: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 11,
  },
  coverLetterContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  coverLetterText: {
    color: "#4A4868",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 19.5,
  },
  toggle: {
    width: 42,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#0000001A",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  toggleActive: {
    backgroundColor: "#0D5C63",
  },
  toggleThumb: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },
  toggleThumbActive: {
    alignSelf: "flex-end",
  },
  matchBanner: {
    height: 60,
    borderRadius: 12,
    backgroundColor: "#EBF6F7",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    marginBottom: 28,
  },
  matchText: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 19.5,
    marginLeft: 12,
    flex: 1,
  },
  footer: {
    marginTop:-10,
    alignItems: "center",
  },
  submitButton: {
    width: "100%",
    height: 55,
    borderRadius: 14,
    backgroundColor: "#0D5C63",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 13,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 22.5,
  },
  footerNote: {
    color: "#8A88A8",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "center",
  },
});

export default QuickApply;
