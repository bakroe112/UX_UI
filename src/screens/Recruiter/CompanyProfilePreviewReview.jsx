import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixedHeader}>
        <View style={styles.row3}>
          <View style={styles.row2}>
            <TouchableOpacity onPress={() => props.onNavigate("dashboard")}>
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
          <TouchableOpacity style={styles.button} onPress={() => { }}>
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
                onPress={() => { }}
              >
                <Text style={styles.text4}>{"F"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.view2}>
              <TouchableOpacity style={styles.button2} onPress={() => { }}>
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
            <TouchableOpacity
              style={styles.view7}
              onPress={() => props.onNavigate("companyprofile")}
            >
              <Text style={styles.text11}>{"About"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.view7}
              onPress={() => props.onNavigate("companyjobsjobs")}
            >
              <Text style={styles.text11}>{"Jobs"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.view7}
              onPress={() => props.onNavigate("companyprofileculture")}
            >
              <Text style={styles.text11}>{"Culture"}</Text>
            </TouchableOpacity>
            <View style={styles.view8}>
              <Text style={styles.text10}>{"Reviews"}</Text>
              <View style={styles.underlineBar}></View>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column6}>
          <View style={styles.row8}>
            <View style={styles.column7}>
              <Text style={styles.text12}>{"4.8"}</Text>
              <View style={styles.column8}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/6b2vm936_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image8}
                />
                <Text style={styles.text13}>{"127"}</Text>
              </View>
            </View>
            <View style={styles.column9}>
              <Text style={styles.text14}>{"5"}</Text>
              <Text style={styles.text14}>{"4"}</Text>
              <Text style={styles.text14}>{"3"}</Text>
              <Text style={styles.text14}>{"2"}</Text>
              <Text style={styles.text14}>{"1"}</Text>
            </View>
            <View style={styles.column10}>
              <View style={styles.view9}>
                <View style={styles.box2}></View>
              </View>
              <View style={styles.view9}>
                <View style={styles.box3}></View>
              </View>
              <View style={styles.view9}>
                <View style={styles.box4}></View>
              </View>
              <View style={styles.view9}>
                <View style={styles.box4}></View>
              </View>
              <View style={styles.view10}>
                <View style={styles.box4}></View>
              </View>
            </View>
          </View>
          <View style={styles.column11}>
            <View style={styles.column12}>
              <View style={styles.column13}>
                <View style={styles.row9}>
                  <View style={styles.row10}>
                    <ImageBackground
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/ick7f2nj_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.view11}
                    >
                      <Text style={styles.text15}>{"LK"}</Text>
                    </ImageBackground>
                    <View style={styles.column14}>
                      <Text style={styles.text16}>{"Antho"}</Text>
                      <Text style={styles.text17}>{"18:30 - 03/25/2026"}</Text>
                    </View>
                  </View>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/3dcsm574_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image9}
                  />
                  <View style={styles.box5}></View>
                </View>
                <View style={styles.view12}>
                  <Text style={styles.text18}>
                    {"Work-life balance is respected."}
                  </Text>
                </View>
              </View>
              <View>
                <View style={styles.box6}></View>
                <View style={styles.box7}></View>
              </View>
            </View>
            <View style={styles.column12}>
              <View style={styles.column13}>
                <View style={styles.row9}>
                  <View style={styles.row10}>
                    <ImageBackground
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/yf712rn1_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.view11}
                    >
                      <Text style={styles.text15}>{"LK"}</Text>
                    </ImageBackground>
                    <View style={styles.column14}>
                      <Text style={styles.text16}>{"Monica"}</Text>
                      <Text style={styles.text17}>{"18:30 - 03/25/2026"}</Text>
                    </View>
                  </View>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/kw893ff8_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image9}
                  />
                  <View style={styles.box5}></View>
                </View>
                <View style={styles.view13}>
                  <Text style={styles.text18}>
                    {
                      "A good place to learn and grow, especially for junior developers"
                    }
                  </Text>
                </View>
              </View>
              <View>
                <View style={styles.box6}></View>
                <View style={styles.box7}></View>
              </View>
            </View>
            <View style={styles.column12}>
              <View style={styles.column13}>
                <View style={styles.row9}>
                  <View style={styles.row10}>
                    <ImageBackground
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/ig1u1652_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.view11}
                    >
                      <Text style={styles.text15}>{"LK"}</Text>
                    </ImageBackground>
                    <View style={styles.column14}>
                      <Text style={styles.text16}>{"Lucy"}</Text>
                      <Text style={styles.text17}>{"18:30 - 03/25/2026"}</Text>
                    </View>
                  </View>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/j15juu2n_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image9}
                  />
                  <View style={styles.box5}></View>
                </View>
                <View style={styles.view13}>
                  <Text style={styles.text18}>
                    {
                      "A good place to learn and grow, especially for junior developers"
                    }
                  </Text>
                </View>
              </View>
              <View>
                <View style={styles.box6}></View>
                <View style={styles.box7}></View>
              </View>
            </View>
            <View style={styles.column12}>
              <View style={styles.column13}>
                <View style={styles.row9}>
                  <View style={styles.row10}>
                    <ImageBackground
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/lxt5tplj_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.view11}
                    >
                      <Text style={styles.text15}>{"LK"}</Text>
                    </ImageBackground>
                    <View style={styles.column14}>
                      <Text style={styles.text16}>{"David"}</Text>
                      <Text style={styles.text17}>{"18:30 - 03/25/2026"}</Text>
                    </View>
                  </View>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/eoc8bkrk_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image9}
                  />
                  <View style={styles.box5}></View>
                </View>
                <View style={styles.view12}>
                  <Text style={styles.text18}>
                    {"Work-life balance is respected."}
                  </Text>
                </View>
              </View>
              <View>
                <View style={styles.box6}></View>
                <View style={styles.box7}></View>
              </View>
            </View>
            <View style={styles.column15}>
              <View style={styles.row9}>
                <View style={styles.row10}>
                  <ImageBackground
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/0hsq45hn_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.view11}
                  >
                    <Text style={styles.text15}>{"LK"}</Text>
                  </ImageBackground>
                  <View style={styles.column14}>
                    <Text style={styles.text16}>{"Sarah"}</Text>
                    <Text style={styles.text17} numberOfLines={1}>
                      {"18:30 - 03/25/2026"}
                    </Text>
                  </View>
                </View>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/vc592ucl_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image9}
                />
                <View style={styles.box5}></View>
              </View>
              <View style={styles.view12}>
                <Text style={styles.text18}>
                  {"Work-life balance is respected."}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.paginationContainer}>
            <TouchableOpacity style={styles.paginationButton}>
              <Text style={styles.paginationButtonText}>{"<"}</Text>
            </TouchableOpacity>
            <View style={styles.paginationNumbers}>
              <TouchableOpacity style={styles.pageNumberActive}>
                <Text style={styles.pageNumberTextActive}>{"1"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pageNumber}>
                <Text style={styles.pageNumberText}>{"2"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pageNumber}>
                <Text style={styles.pageNumberText}>{"3"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pageNumber}>
                <Text style={styles.pageNumberText}>{"4"}</Text>
              </TouchableOpacity>
              <Text style={styles.pageNumberText}>{"..."}</Text>
              <TouchableOpacity style={styles.pageNumber}>
                <Text style={styles.pageNumberText}>{"5"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pageNumber}>
                <Text style={styles.pageNumberText}>{"6"}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.paginationButton}>
              <Text style={styles.paginationButtonText}>{">"}</Text>
            </TouchableOpacity>
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
    width: 150,
    height: 8,
    backgroundColor: "#0D5C63",
    borderRadius: 4,
  },
  box3: {
    width: 29,
    height: 8,
    backgroundColor: "#0D5C63",
    borderRadius: 4,
  },
  box4: {
    width: 18,
    height: 8,
    backgroundColor: "#0D5C63",
    borderRadius: 4,
  },
  box5: {
    height: 42,
    flex: 1,
  },
  box6: {
    height: 1,
  },
  box7: {
    height: 1,
    backgroundColor: "#0D5C633B",
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
  column: {
    backgroundColor: "#FFFFFF",
    paddingTop: 1,
    height: 312,
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
    marginHorizontal: 20,
  },
  column7: {
    marginTop: 24,
    marginRight: 15,
  },
  column8: {
    alignSelf: "flex-start",
  },
  column9: {
    marginTop: 9,
    marginRight: 11,
    gap:0.5
  },
  column10: {
    flex: 1,
    marginTop: 14,
    marginBottom: 7,
  },
  column11: {
    marginBottom: 24,
  },
  column12: {
    marginBottom: 9,
  },
  column13: {
    marginBottom: 22,
    marginRight: 27,
  },
  column14: {
    flex: 1,
  },
  column15: {
    marginRight: 27,
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
    width: 88,
    height: 16,
    marginBottom: 2,
  },
  image9: {
    width: 74,
    height: 14,
    marginTop: 25,
    marginLeft: 40,
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
    paddingHorizontal: 5,
    marginHorizontal: 1,
  },
  row8: {
    flexDirection: "row",
    borderColor: "#0D5C634D",
    borderRadius: 9,
    borderWidth: 1,
    paddingHorizontal: 9,
    marginBottom: 24,
  },
  row9: {
    flexDirection: "row",
    marginBottom: 2,
  },
  row10: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
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
    opacity: 0.8,
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
    fontSize: 40,
    fontWeight: "bold",
    marginRight: 25,
    marginTop: -20,
  },
  text13: {
    color: "#000000",
    fontSize: 13,
    marginRight: 69,
    marginBottom: 20,
    fontWeight:500
  },
  text14: {
    color: "#000000",
    fontSize: 14,
    fontWeight:500
  },
  text15: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  text16: {
    color: "#7A6181",
    fontSize: 16,
    fontWeight: "bold",
    width: 120,
    marginBottom: 4,
  },
  text17: {
    color: "#1C1A2E",
    fontSize: 10,
    opacity: 0.7,
    width: 120,
  },
  text18: {
    color: "#1C1A2E",
    fontSize: 12,
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
    justifyContent: "center",
  },
  underlineBar: {
    width: "90%",
    height: 2,
    backgroundColor: "#0D5C63",
    marginTop: 20,
    marginBottom: -20,
  },
  view9: {
    backgroundColor: "#0D5C631A",
    borderRadius: 4,
    marginBottom: 12,
  },
  view10: {
    backgroundColor: "#0D5C631A",
    borderRadius: 4,
  },
  view11: {
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginRight: 6,
  },
  view12: {
    backgroundColor: "#0D5C630D",
    borderColor: "#0D5C631A",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    paddingVertical: 14,
    paddingLeft: 12,
    marginLeft: 34,
  },
  view13: {
    backgroundColor: "#0D5C630D",
    borderColor: "#0D5C631A",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    paddingVertical: 11,
    paddingLeft: 11,
    paddingRight: 24,
    marginLeft: 34,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: -20,
    marginBottom:15
  },
  paginationButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  paginationButtonText: {
    fontSize: 20,
    color: "#666666",
  },
  paginationNumbers: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
  },
  pageNumber: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 3,
  },
  pageNumberActive: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginHorizontal: 3,
    borderRadius: 6,
    borderColor: "#0D5C63",
    borderWidth: 1,
  },
  pageNumberText: {
    fontSize: 17,
    color: "#666666",
    fontWeight:500
  },
  pageNumberTextActive: {
    fontSize: 20,
    color: "#666666",
  },
});
