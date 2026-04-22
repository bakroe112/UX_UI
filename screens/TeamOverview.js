import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "../components/Navigation";

export default (props) => {
  const handleNavigate = (screen) => {
    console.log("Navigate to:", screen);
    switch (screen) {
      case "dashboard":
        props.navigation.navigate("MainDashboard");
        break;
      case "active":
        props.navigation.navigate("JobListingActive");
        break;
      case "talent":
        props.navigation.navigate("TalentList");
        break;
      case "inbox":
        props.navigation.navigate("InboxPage");
        break;
      case "analytics":
        props.navigation.navigate("AnalyticsOverview");
        break;
      default:
        console.log("Screen not implemented yet:", screen);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <View style={styles.row2}>
            {
              <TouchableOpacity onPress={() => handleNavigate("dashboard")}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png",
                  }}
                  resizeMode="stretch"
                  style={styles.image4}
                />
              </TouchableOpacity>
            }
            <Text style={styles.text2}>{"Team Overview"}</Text>
          </View>
          <View style={styles.row3}>
            <Text style={styles.text3}>{"4 recruiter"}</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/xeq7ex3j_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image5}
            />
            <Text style={styles.text4}>{"12 active roles"}</Text>
          </View>
        </View>
        <View style={styles.column2}>
          <View style={styles.row4}>
            <View style={styles.column3}>
              <Text style={styles.text5}>{"18"}</Text>
              <Text style={styles.text6}>{"Total Roles"}</Text>
            </View>
            <View style={styles.column4}>
              <Text style={styles.text7}>{"73"}</Text>
              <Text style={styles.text8}>{"In Pipeline"}</Text>
            </View>
            <View style={styles.column5}>
              <Text style={styles.text9}>{"5"}</Text>
              <Text style={styles.text10}>{"Offers Out"}</Text>
            </View>
          </View>
          <Text style={styles.text11}>{"Recruiter Workload"}</Text>
          <View>
            <View style={styles.row5}>
              <View style={styles.row2}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.text12}>{"A"}</Text>
                </TouchableOpacity>
                <View>
                  <View style={styles.column6}>
                    <Text style={styles.text13}>{"Alex Rivera"}</Text>
                    <Text style={styles.text14}>{"Lead Recruiter"}</Text>
                  </View>
                  <View style={styles.row3}>
                    <Text style={styles.text15}>{"5 active roles"}</Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/u123ew9w_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image6}
                    />
                    <Text style={styles.text16}>{"2 offers"}</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.view}>
                  <View style={styles.box}></View>
                </View>
                <Text style={styles.text17}>{"5/8 capacity"}</Text>
              </View>
            </View>
            <View style={styles.row5}>
              <View style={styles.row2}>
                <TouchableOpacity style={styles.button2} onPress={() => {}}>
                  <Text style={styles.text12}>{"P"}</Text>
                </TouchableOpacity>
                <View>
                  <View style={styles.column7}>
                    <Text style={styles.text13}>{"Priya Sharma"}</Text>
                    <Text style={styles.text18}>{"Sr. Recruiter"}</Text>
                  </View>
                  <View style={styles.row3}>
                    <Text style={styles.text15}>{"4 active roles"}</Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/unke6p71_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image6}
                    />
                    <Text style={styles.text16}>{"1 offers"}</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.view2}>
                  <View style={styles.box2}></View>
                </View>
                <Text style={styles.text17}>{"4/8 capacity"}</Text>
              </View>
            </View>
            <View style={styles.row5}>
              <View style={styles.row2}>
                <TouchableOpacity style={styles.button3} onPress={() => {}}>
                  <Text style={styles.text12}>{"J"}</Text>
                </TouchableOpacity>
                <View>
                  <View style={styles.column8}>
                    <Text style={styles.text13}>{"Jordan Lee"}</Text>
                    <Text style={styles.text19}>{"Recruiter"}</Text>
                  </View>
                  <View style={styles.view3}>
                    <Text style={styles.text20}>{"3 active roles"}</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.view4}>
                  <View style={styles.box3}></View>
                </View>
                <Text style={styles.text17}>{"3/8 capacity"}</Text>
              </View>
            </View>
            <View style={styles.row5}>
              <View style={styles.row2}>
                <TouchableOpacity style={styles.button4} onPress={() => {}}>
                  <Text style={styles.text12}>{"S"}</Text>
                </TouchableOpacity>
                <View>
                  <View style={styles.column8}>
                    <Text style={styles.text13}>{"Sam Chen"}</Text>
                    <Text style={styles.text21}>{"Sourcer"}</Text>
                  </View>
                  <View style={styles.view3}>
                    <Text style={styles.text20}>{"6 active roles"}</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.view5}>
                  <View style={styles.box4}></View>
                </View>
                <Text style={styles.text17}>{"6/8 capacity"}</Text>
              </View>
            </View>
            <View style={styles.row6}>
              <View style={styles.row2}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/u0yfl7sv_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image7}
                />
                <View>
                  <Text style={styles.text22}>{"Q2 Hiring Goal"}</Text>
                  <View style={styles.row3}>
                    <Text style={styles.text23}>{"8/24 hires"}</Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/tcwzkhp1_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image8}
                    />
                    <Text style={styles.text24}>{"33% complete"}</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.text25}>{"33%"}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Navigation currentScreen="teamoverview" onNavigate={handleNavigate} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    width: 40,
    height: 4,
    backgroundColor: "#2C7077",
  },
  box2: {
    width: 35,
    height: 4,
    backgroundColor: "#8D7893",
  },
  box3: {
    width: 25,
    height: 4,
    backgroundColor: "#E8BF74",
  },
  box4: {
    width: 47,
    height: 4,
    backgroundColor: "#6D78D6",
  },
  box5: {
    height: 2,
    backgroundColor: "#0D5C63",
    marginBottom: 5,
    marginHorizontal: 19,
  },
  button: {
    backgroundColor: "#2F7379",
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 13,
    marginRight: 11,
  },
  button2: {
    backgroundColor: "#8D7893",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 13,
    marginRight: 11,
  },
  button3: {
    backgroundColor: "#E8BF74",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginRight: 11,
  },
  button4: {
    backgroundColor: "#6D78D6",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 13,
    marginRight: 11,
  },
  column: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  column2: {
    marginBottom: 57,
    marginHorizontal: 20,
  },
  column3: {
    flex: 1,
    backgroundColor: "#EBF6F7",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 15,
    marginRight: 23,
    shadowColor: "#0D5C6336",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 12,
    elevation: 12,
  },
  column4: {
    flex: 1,
    backgroundColor: "#F2EDF5",
    borderRadius: 12,
    paddingVertical: 14,
    paddingLeft: 15,
    marginRight: 23,
    shadowColor: "#7A618136",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 12,
    elevation: 12,
  },
  column5: {
    flex: 1,
    backgroundColor: "#FDF8EE",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 15,
    shadowColor: "#E2B05336",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 12,
    elevation: 12,
  },
  column6: {
    alignSelf: "flex-start",
    marginRight: 46,
  },
  column7: {
    alignSelf: "flex-start",
    marginRight: 38,
  },
  column8: {
    alignSelf: "flex-start",
  },
  column9: {
    flex: 1,
    marginRight: 36,
  },
  column10: {
    marginRight: 36,
  },
  column11: {
    flex: 1,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 9,
  },
  image2: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  image3: {
    width: 24,
    height: 20,
  },
  image4: {
    width: 36,
    height: 36,
    marginLeft: 10,
  },
  image5: {
    width: 2,
    height: 2,
    marginRight: 5,
  },
  image6: {
    width: 2,
    height: 2,
    marginRight: 2,
  },
  image7: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  image8: {
    width: 2,
    height: 2,
    marginRight: 8,
  },
  image9: {
    width: 24,
    height: 24,
    marginBottom: 1,
    marginLeft: 19,
  },
  image10: {
    width: 18,
    height: 18,
    marginBottom: 5,
  },
  image11: {
    width: 19,
    height: 18,
    marginBottom: 5,
  },
  image12: {
    width: 18,
    height: 18,
    marginBottom: 7,
  },
  image13: {
    width: 19,
    height: 18,
    marginBottom: 5,
    marginLeft: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 17,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  row5: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 11,
    marginBottom: 16,
  },
  row6: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#136A72",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 17,
  },
  row7: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFFF0",
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F9F5F0",
  },
  text: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
  },
  text2: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  text3: {
    color: "#A7A6BE",
    fontSize: 12,
    marginRight: 6,
  },
  text4: {
    color: "#A7A6BE",
    fontSize: 12,
  },
  text5: {
    color: "#0D5C63",
    fontSize: 18,
    fontWeight: "bold",
  },
  text6: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "bold",
  },
  text7: {
    color: "#826B89",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 40,
  },
  text8: {
    color: "#826B89",
    fontSize: 13,
    fontWeight: "bold",
  },
  text9: {
    color: "#E2B053",
    fontSize: 18,
    fontWeight: "bold",
  },
  text10: {
    color: "#E2B053",
    fontSize: 13,
    fontWeight: "bold",
  },
  text11: {
    color: "#000000",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text12: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  text13: {
    color: "#000000",
    fontSize: 13,
    fontWeight: "bold",
  },
  text14: {
    color: "#B6B4C8",
    fontSize: 11,
  },
  text15: {
    color: "#000000",
    fontSize: 11,
    marginRight: 10,
  },
  text16: {
    color: "#42B46D",
    fontSize: 11,
    fontWeight: "bold",
  },
  text17: {
    color: "#000000",
    fontSize: 10,
  },
  text18: {
    color: "#B6B4C8",
    fontSize: 11,
    marginRight: 19,
  },
  text19: {
    color: "#B6B4C8",
    fontSize: 11,
    marginRight: 20,
  },
  text20: {
    color: "#000000",
    fontSize: 11,
  },
  text21: {
    color: "#B6B4C8",
    fontSize: 11,
    marginRight: 22,
  },
  text22: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    marginRight: 59,
  },
  text23: {
    color: "#FFFFFF",
    fontSize: 11,
    marginRight: 10,
  },
  text24: {
    color: "#FFFFFF",
    fontSize: 11,
  },
  text25: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  text26: {
    color: "#0D5C63",
    fontSize: 12,
    fontWeight: "bold",
  },
  text27: {
    color: "#B0B0C8",
    fontSize: 12,
  },
  view: {
    alignSelf: "flex-start",
    backgroundColor: "#F2F3E9",
    paddingRight: 20,
  },
  view2: {
    alignSelf: "flex-start",
    backgroundColor: "#F2F3E9",
    paddingRight: 25,
  },
  view3: {
    alignSelf: "flex-start",
    paddingBottom: 1,
  },
  view4: {
    alignSelf: "flex-start",
    backgroundColor: "#F2F3E9",
    paddingRight: 35,
  },
  view5: {
    alignSelf: "flex-start",
    backgroundColor: "#F2F3E9",
    paddingRight: 13,
  },
});
