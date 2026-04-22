import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CompanyProfilePreviewCulture({ navigation }) {
  const handleNavigate = (screen) => {
    const screenMap = {
      companyprofile: "CompanyProfilePreviewAbout",
      companyjobsjobs: "CompanyProfilePreviewJobs",
      companyprofilereview: "CompanyProfilePreviewReview",
    };
    
    const route = screenMap[screen];
    if (route) {
      navigation.navigate(route);
    } else {
      console.log("Screen not found:", screen);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.fixedHeader}>
        <View style={styles.row3}>
          <View style={styles.row2}>
            <TouchableOpacity onPress={() => handleNavigate("companyprofile")}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image4}
              />
            </TouchableOpacity>
            <View style={styles.view}>
              <Text style={styles.text2}>{"Company profile"}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.text3}>{"Save"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <View style={styles.column2}>
            <View style={styles.column3}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#0D5C63", "#1A7A83", "#7A618154"]}
                style={styles.box}
              ></LinearGradient>
              <TouchableOpacity
                style={styles.absoluteButton2}
                onPress={() => {}}
              >
                <Text style={styles.text4}>{"F"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.view2}>
              <TouchableOpacity style={styles.button2} onPress={() => {}}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/77vbaah1_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image5}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text5}>{"Fiiway"}</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <Text style={styles.text6}>{"Design Software · Da Nang City"}</Text>
          </View>
          <View style={styles.row4}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/ww9m267x_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image6}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/3gp0qqfx_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image6}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/k589b3n4_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image6}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/94wnouvg_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image6}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/7fmo059z_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image7}
            />
            <View style={styles.view5}>
              <Text style={styles.text7}>{"4.8 · 380 reviews"}</Text>
            </View>
          </View>
          <View style={styles.row5}>
            <View style={styles.column4}>
              <View style={styles.view6}>
                <Text style={styles.text8}>{"2,400+"}</Text>
              </View>
              <View style={styles.view6}>
                <Text style={styles.text9}>{"Employees"}</Text>
              </View>
            </View>
            <View style={styles.column4}>
              <View style={styles.view6}>
                <Text style={styles.text8}>{"12"}</Text>
              </View>
              <View style={styles.view6}>
                <Text style={styles.text9}>{"Open roles"}</Text>
              </View>
            </View>
            <View style={styles.column5}>
              <View style={styles.view6}>
                <Text style={styles.text8}>{"$200M+"}</Text>
              </View>
              <View style={styles.view6}>
                <Text style={styles.text9}>{"Funding"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.row6}>
            <TouchableOpacity style={styles.view7} onPress={() => handleNavigate("companyprofile")}>
              <Text style={styles.text11}>{"About"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.view7} onPress={() => handleNavigate("companyjobsjobs")}>
              <Text style={styles.text11}>{"Jobs"}</Text>
            </TouchableOpacity>
            <View style={styles.view8}>
              <Text style={styles.text10}>{"Culture"}</Text>
            </View>
            <TouchableOpacity style={styles.view7} onPress={() => handleNavigate("companyprofilereview")}>
              <Text style={styles.text11}>{"Reviews"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column6}>
          <View style={styles.column7}>
            <View style={styles.row7}>
              <Text style={styles.text8}>{"Company Values"}</Text>
              <TouchableOpacity style={styles.button3} onPress={() => {}}>
                <Text style={styles.text12}>{"Add +"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column8}>
              <View style={styles.row8}>
                <TouchableOpacity style={styles.button4} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/wvrfxtd0_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image8}
                  />
                </TouchableOpacity>
                <View style={styles.column9}>
                  <Text style={styles.text8}>{"Collaborative"}</Text>
                  <Text style={styles.text13}>
                    {"Cross-functional design sprints every 2 weeks"}
                  </Text>
                </View>
              </View>
              <View style={styles.row8}>
                <TouchableOpacity style={styles.button5} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/jc3fqw9e_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image9}
                  />
                </TouchableOpacity>
                <View style={styles.column9}>
                  <Text style={styles.text8}>{"User-Obsessed"}</Text>
                  <Text style={styles.text13}>
                    {"Weekly user research sessions company-wide"}
                  </Text>
                </View>
              </View>
              <View style={styles.row8}>
                <TouchableOpacity style={styles.button6} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/8mvsh8de_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image8}
                  />
                </TouchableOpacity>
                <View style={styles.column9}>
                  <Text style={styles.text8}>{"Innovation-Driven"}</Text>
                  <Text style={styles.text13}>
                    {"Monthly hackathons and idea challenges"}
                  </Text>
                </View>
              </View>
              <View style={styles.row8}>
                <TouchableOpacity style={styles.button7} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/e4ydu9t9_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image9}
                  />
                </TouchableOpacity>
                <View style={styles.column9}>
                  <Text style={styles.text8}>{"Transparent"}</Text>
                  <Text style={styles.text13}>
                    {"Open communication and decision making"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.column10}>
            <View style={styles.row9}>
              <Text style={styles.text8}>{"Perks & Benefits"}</Text>
              <TouchableOpacity style={styles.button3} onPress={() => {}}>
                <Text style={styles.text12}>{"Add +"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column11}>
              <View style={styles.row10}>
                <TouchableOpacity style={styles.buttonRow} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/43i1zv5s_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image10}
                  />
                  <Text style={styles.text14}>{"Remote-First"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRow2} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/h4te3sdn_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image10}
                  />
                  <Text style={styles.text14}>{"Unlimited PTO"}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row10}>
                <TouchableOpacity style={styles.buttonRow3} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/m80ve2y0_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image10}
                  />
                  <Text style={styles.text14}>{"Health Insurance"}</Text>
                </TouchableOpacity>
                <View style={styles.row11}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/hz5c8wi8_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image10}
                  />
                  <Text style={styles.text15}>{"Equity"}</Text>
                  <View style={styles.box2}></View>
                </View>
                <View style={styles.box3}></View>
              </View>
              <View style={styles.row10}>
                <TouchableOpacity style={styles.buttonRow} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/ota638qg_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image10}
                  />
                  <Text style={styles.text14}>{"Professional Dev"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRow2} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/1wz11241_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image10}
                  />
                  <Text style={styles.text14}>{"401(k)"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  fixedHeader: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    zIndex: 10,
  },
  absoluteButton2: {
    position: "absolute",
    bottom: -32,
    left: 19,
    backgroundColor: "#0D5C63",
    borderColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 3,
    paddingVertical: 12,
    paddingHorizontal: 22,
  },
  box: {
    height: 80,
  },
  box2: {
    width: 14,
    height: 14,
  },
  box3: {
    height: 30,
    flex: 1,
  },
  button: {
    backgroundColor: "#E2B053",
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 14,
  },
  button2: {
    backgroundColor: "#F3EFE9",
    borderRadius: 11,
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginRight: 20,
  },
  button3: {
    backgroundColor: "#EBF6F7",
    borderColor: "#0D5C6312",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  button4: {
    backgroundColor: "#0D5C6324",
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
  },
  button5: {
    backgroundColor: "#7A618124",
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
  },
  button6: {
    backgroundColor: "#E2B05324",
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
  },
  button7: {
    backgroundColor: "#16A34A24",
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2EDF5",
    borderColor: "#E8E0ED",
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  buttonRow2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2EDF5",
    borderColor: "#E8E0ED",
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  buttonRow3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2EDF5",
    borderColor: "#E8E0ED",
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  column: {
    backgroundColor: "#FFFFFF",
    paddingTop: 1,
  },
  column2: {},
  column3: {
    marginBottom: 15,
  },
  column4: {
    flex: 1,
    backgroundColor: "#F3EFE9",
    borderRadius: 11,
    padding: 9,
    marginRight: 8,
  },
  column5: {
    flex: 1,
    backgroundColor: "#F3EFE9",
    borderRadius: 11,
    padding: 9,
  },
  column6: {
    paddingHorizontal: 20,
  },
  column7: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginBottom: 10,
    marginHorizontal: -10,
  },
  column8: {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  column9: {
    flex: 1,
    marginRight: 8,
  },
  column10: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingTop: 22,
    shadowColor: "#00000008",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 50,
  },
  column11: {
    marginHorizontal: 25,
  },
  image4: {
    width: 36,
    height: 36,
    marginRight: 12,
  },
  image5: {
    width: 14,
    height: 14,
  },
  image6: {
    width: 12,
    height: 12,
  },
  image7: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  image8: {
    width: 18,
    height: 16,
  },
  image9: {
    width: 22,
    height: 22,
  },
  image10: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  row4: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
    marginLeft: 20,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 20,
  },
  row6: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 1,
    marginHorizontal: 1,
  },
  row7: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    paddingHorizontal: 0,
  },
  row8: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 16,
    paddingLeft: 14,
    paddingRight: 12,
    marginBottom: 12,
    marginHorizontal: 14,
    shadowColor: "#00000008",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 3,
  },
  row9: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    marginHorizontal: 19,
  },
  row10: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  row11: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2EDF5",
    borderColor: "#E8E0ED",
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginRight: 12,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F9F5F0",
    paddingBottom: 10,
    paddingTop: 10,
  },
  text2: {
    color: "#1A1828",
    fontSize: 17,
    fontWeight: "bold",
  },
  text3: {
    color: "#1A1828",
    fontSize: 12,
    fontWeight: "bold",
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  text5: {
    color: "#1A1828",
    fontSize: 20,
    fontWeight: "bold",
  },
  text6: {
    color: "#4A4868",
    fontSize: 12,
  },
  text7: {
    color: "#8A88A8",
    fontSize: 11,
  },
  text8: {
    color: "#1A1828",
    fontSize: 14,
    fontWeight: "bold",
  },
  text9: {
    color: "#8A88A8",
    fontSize: 9,
  },
  text10: {
    color: "#0D5C63",
    fontSize: 12,
    fontWeight: "bold",
  },
  text11: {
    color: "#8A88A8",
    fontSize: 12,
  },
  text12: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "bold",
  },
  text13: {
    color: "#8A88A8",
    fontSize: 12,
  },
  text14: {
    color: "#7A6181",
    fontSize: 12,
    fontWeight: "bold",
  },
  text15: {
    color: "#7A6181",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
  view: {
    paddingRight: 22,
  },
  view2: {
    alignItems: "flex-end",
  },
  view3: {
    alignSelf: "flex-start",
    marginLeft: 19,
  },
  view4: {
    alignSelf: "flex-start",
    marginBottom: 9,
    marginLeft: 20,
  },
  view5: {
    paddingBottom: 1,
  },
  view6: {
    alignItems: "center",
  },
  view7: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
  view8: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
    marginRight: 1,
  },
});
