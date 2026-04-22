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

export default function ToDoList(props) {
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
      <View style={styles.headerContainer}></View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.column}>
          <View style={styles.row3}>
            <View style={styles.row2}>
              <TouchableOpacity onPress={() => handleNavigate("dashboard")}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png",
                  }}
                  resizeMode="stretch"
                  style={styles.image4}
                />
              </TouchableOpacity>
              <Text style={styles.text2}>{"My Tasks"}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log("Back button pressed");
                handleNavigate("dashboard");
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/zde02zb2_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image5}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row4}>
            <Text style={styles.text3}>{"4 pending"}</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/rcdnk18p_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image6}
            />
            <Text style={styles.text4}>{"2 completed todday"}</Text>
          </View>
          <View style={styles.row4}>
            <TouchableOpacity style={styles.button2} onPress={() => {}}>
              <Text style={styles.text5}>{"2 Urgent"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={() => {}}>
              <Text style={styles.text6}>{"2 Medium"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4} onPress={() => {}}>
              <Text style={styles.text7}>{"2 Done"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.column3}>
          <Text style={styles.text8}>{"PENDING"}</Text>
          <View style={styles.row6}>
            <View style={styles.row7}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/stlu1t50_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image8}
              />
              <View style={styles.column5}>
                <Text style={styles.text9}>
                  {"Review 12 new applications for Staff Engineer"}
                </Text>
                <View style={styles.row4}>
                  <View style={styles.view}>
                    <Text style={styles.text10}>{"high"}</Text>
                  </View>
                  <Text style={styles.text11}>{"Today"}</Text>
                </View>
              </View>
            </View>
            <View style={styles.box}></View>
          </View>
          <View style={styles.row6}>
            <View style={styles.row7}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/stlu1t50_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image8}
              />
              <View style={styles.column5}>
                <Text style={styles.text9}>
                  {"Post updated JD for UX Researcher"}
                </Text>
                <View style={styles.row4}>
                  <View style={styles.view2}>
                    <Text style={styles.text12}>{"medium"}</Text>
                  </View>
                  <Text style={styles.text11}>{"Tomorrow"}</Text>
                </View>
              </View>
            </View>
            <View style={styles.box}></View>
          </View>
          <View style={styles.row8}>
            <View style={styles.row7}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/stlu1t50_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image8}
              />
              <View style={styles.column5}>
                <Text style={styles.text9}>
                  {"Send offer letter to Marcus Liu"}
                </Text>
                <View style={styles.row4}>
                  <View style={styles.view3}>
                    <Text style={styles.text13}>{"medium"}</Text>
                  </View>
                  <Text style={styles.text11}>{"Tomorrow"}</Text>
                </View>
              </View>
            </View>
            <View style={styles.box}></View>
          </View>
        </View>
        <View style={styles.column6}>
          <Text style={styles.text14}>{"COMPLETED"}</Text>
          <View>
            <View style={styles.row9}>
              <TouchableOpacity style={styles.button6} onPress={() => {}}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/vxum9e99_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image9}
                />
              </TouchableOpacity>
              <Text style={styles.text15}>
                {"Sync with hiring manager - Design Lead role"}
              </Text>
            </View>
            <View style={styles.row10}>
              <TouchableOpacity style={styles.button7} onPress={() => {}}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/ve0t9e05_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image9}
                />
              </TouchableOpacity>
              <Text style={styles.text15}>
                {"Archive 8 closed applications"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Navigation currentScreen="todolist" onNavigate={handleNavigate} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    backgroundColor: "#FFFFFF",
    paddingTop: 0,
    paddingBottom: 12,
    borderBottomWidth: 0,
    borderBottomColor: "#E8E6F0",
  },
  box: {
    width: 15,
    height: 14,
    backgroundColor: "#FFFFFF",
    borderColor: "#4A4868",
    borderRadius: 3,
    borderWidth: 1,
  },
  box2: {
    height: 70,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#156E75",
    borderRadius: 10,
    padding: 9,
  },
  button2: {
    backgroundColor: "#FEF2F2",
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 13,
    marginRight: 8,
  },
  button3: {
    backgroundColor: "#FDF8EE",
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  button4: {
    backgroundColor: "#F0FDF4",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  button5: {
    backgroundColor: "#FEF2F2",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 6,
  },
  button6: {
    backgroundColor: "#7CC895",
    borderColor: "#FCFBF8",
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    marginRight: 5,
  },
  button7: {
    backgroundColor: "#7CC895",
    borderColor: "#FCFBF8",
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    marginRight: 6,
  },
  column: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginBottom: 21,
  },
  column2: {
    marginBottom: 14,
  },
  column3: {
    marginBottom: 18,
    marginHorizontal: 20,
  },
  column4: {
    flex: 1,
  },
  column5: {
    flex: 1,
  },
  column6: {
    marginBottom: 80,
    marginHorizontal: 20,
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
    width: 38,
    height: 38,
    marginRight: 9,
  },
  image5: {
    width: 20,
    height: 20,
  },
  image6: {
    width: 2,
    height: 2,
    marginRight: 5,
  },
  image7: {
    width: 10,
    height: 12,
  },
  image8: {
    width: 35,
    height: 35,
    marginRight: 6,
  },
  image9: {
    width: 9,
    height: 9,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginTop: -18,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row4: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  row5: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 9,
    paddingHorizontal: 11,
  },
  row6: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 11,
    marginBottom: 14,
  },
  row7: {
    flex: 1,
    flexDirection: "row",
    marginRight: 11,
  },
  row8: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 11,
    marginBottom: 14,
  },
  row9: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCFBF8",
    borderRadius: 12,
    paddingVertical: 12,
    paddingLeft: 13,
    paddingRight: 48,
    marginBottom: 11,
  },
  row10: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCFBF8",
    borderRadius: 12,
    paddingVertical: 12,
    paddingLeft: 13,
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
  },
  text3: {
    color: "#A7A6BE",
    fontSize: 12,
    marginRight: 8,
  },
  text4: {
    color: "#A7A6BE",
    fontSize: 12,
  },
  text5: {
    color: "#E05B5B",
    fontSize: 11,
    fontWeight: "bold",
  },
  text6: {
    color: "#C4892A",
    fontSize: 11,
    fontWeight: "bold",
  },
  text7: {
    color: "#31AE5F",
    fontSize: 11,
    fontWeight: "bold",
  },
  text8: {
    color: "#A7A6BE",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text9: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 1,
  },
  text10: {
    color: "#E46E6E",
    fontSize: 10,
    fontWeight: "bold",
  },
  text11: {
    color: "#4A4868",
    fontSize: 10,
  },
  text12: {
    color: "#609499",
    fontSize: 10,
    fontWeight: "bold",
  },
  text13: {
    color: "#E2B053",
    fontSize: 10,
    fontWeight: "bold",
  },
  text14: {
    color: "#A7A6BE",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text15: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
  },
  text16: {
    color: "#0D5C63",
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 2,
    textAlign: "center",
  },
  text17: {
    color: "#9B99B0",
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 2,
    textAlign: "center",
  },
  view: {
    backgroundColor: "#FEF2F2",
    borderRadius: 12,
    paddingHorizontal: 11,
    marginRight: 10,
  },
  view2: {
    backgroundColor: "#ECF2F3",
    borderRadius: 12,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  view3: {
    backgroundColor: "#FDF9F1",
    borderRadius: 12,
    paddingHorizontal: 14,
    marginRight: 10,
  },
});
