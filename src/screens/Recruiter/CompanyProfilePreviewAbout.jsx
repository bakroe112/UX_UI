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
            <View style={styles.view7}>
              <Text style={styles.text10}>{"About"}</Text>
              <View style={styles.underlineBar}></View>
            </View>
            <TouchableOpacity
              style={styles.view8}
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
            <TouchableOpacity
              style={styles.view7}
              onPress={() => props.onNavigate("companyprofilereview")}
            >
              <Text style={styles.text11}>{"Reviews"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column6}>
          <View style={styles.column7}>
            <View style={styles.view9}>
              <Text style={styles.text12}>{"About Fiiway"}</Text>
            </View>
            <View style={styles.view10}>
              <Text style={styles.text13}>
                {
                  "Fliway is a leading design software company based in Da Nang, Vietnam. We build tools that empower designers and product teams to create beautiful, user-centered digital experiences at scale."
                }
              </Text>
            </View>
            <TouchableOpacity style={styles.button3} onPress={() => {}}>
              <Text style={styles.text10}>{"Edit →"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column8}>
            <View style={styles.row7}>
              <Text style={styles.text8}>{"Quick Facts"}</Text>
              <TouchableOpacity style={styles.button4} onPress={() => {}}>
                <Text style={styles.text10}>{"Add +"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column9}>
              <View style={styles.row8}>
                <TouchableOpacity style={styles.button5} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/t9pkhqjh_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image8}
                  />
                </TouchableOpacity>
                <Text style={styles.text11}>{"Headquarters"}</Text>
                <View style={styles.box2}></View>
                <Text style={styles.text3}>{"San Francisco, CA"}</Text>
              </View>
              <View style={styles.row9}>
                <TouchableOpacity style={styles.button6} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/rfnnz5xr_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image9}
                  />
                </TouchableOpacity>
                <Text style={styles.text11}>{"Team Size"}</Text>
                <View style={styles.box3}></View>
                <View style={styles.box4}></View>
                <Text style={styles.text3}>{"500 – 1,000 employees"}</Text>
              </View>
              <View style={styles.row8}>
                <TouchableOpacity style={styles.button7} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/uao0qj4d_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image8}
                  />
                </TouchableOpacity>
                <Text style={styles.text11}>{"Stage"}</Text>
                <View style={styles.box2}></View>
                <Text style={styles.text3}>{"Series E · $10B Valuation"}</Text>
              </View>
              <View style={styles.row10}>
                <TouchableOpacity style={styles.button7} onPress={() => {}}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/l38v5tyz_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image8}
                  />
                </TouchableOpacity>
                <Text style={styles.text11}>{"Revenue"}</Text>
                <View style={styles.box2}></View>
                <Text style={styles.text3}>{"~$400M ARR (est.)"}</Text>
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
  absoluteButton: {
    backgroundColor: "#0D5C63",
    borderColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 3,
    paddingVertical: 12,
    paddingHorizontal: 22,
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
    flex: 1,
    alignSelf: "stretch",
  },
  box3: {
    flex: 1,
  },
  box4: {
    width: 20,
    height: 20,
    marginRight: 14,
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
    alignSelf: "flex-start",
    backgroundColor: "#EBF6F7",
    borderColor: "#0D5C6312",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 17,
    marginLeft: 14,
  },
  button4: {
    backgroundColor: "#EBF6F7",
    borderColor: "#0D5C6312",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  button5: {
    backgroundColor: "#EBF6F7",
    borderColor: "#0D5C6312",
    borderRadius: 9,
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  button6: {
    backgroundColor: "#EBF6F7",
    borderColor: "#0D5C6312",
    borderRadius: 9,
    borderWidth: 1,
    padding: 9,
    marginRight: 8,
  },
  button7: {
    backgroundColor: "#EBF6F7",
    borderColor: "#0D5C6312",
    borderRadius: 9,
    borderWidth: 1,
    padding: 7,
    marginRight: 8,
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
    paddingHorizontal: 20,
  },
  column7: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 12,
    paddingRight: 14,
    marginBottom: 10,
    shadowColor: "#0000000D",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
  },
  column8: {
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
  column9: {
    marginBottom: 9,
    marginHorizontal: 24,
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
    width: 17,
    height: 17,
  },
  image9: {
    width: 15,
    height: 13,
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
  row7: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 9,
    marginHorizontal: 27,
  },
  row8: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#f6f6f6",
    borderBottomWidth: 1,
  },
  row9: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#f6f6f6",
    borderBottomWidth: 1,
  },
  row10: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F9F5F0",
    paddingBottom: 10,
    paddingTop: 10,
  },
  text: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
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
    color: "#1A1828",
    fontSize: 13,
    fontWeight: "bold",
  },
    text13: {
    color: "#4A4868",
    fontSize: 12,
    opacity: 0.8,
    lineHeight: 18,
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
  underlineBar: {
    width: "90%",
    height: 2,
    backgroundColor: "#0D5C63",
    marginTop: 20,
    marginBottom: -20,
  },
  view8: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
    marginRight: 1,
  },
  view9: {
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 14,
  },
  view10: {
    paddingBottom: 4,
    marginBottom: 4,
    marginLeft: 14,
  },
});
