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

export default function ApplicationDetails(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <View style={styles.row3}>
            <TouchableOpacity onPress={() => props.onNavigate("resume")}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.text2}>{"Reject"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row2}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#7A6181", "#7A6181BA"]}
              style={styles.view}
            >
              <Text style={styles.text3}>{"SJ"}</Text>
            </LinearGradient>
            <View>
              <View style={styles.view2}>
                <Text style={styles.text4}>{"Sarah Johnson"}</Text>
              </View>
              <View style={styles.view3}>
                <Text style={styles.text5}>{"Applied Apr 1 · 2 days ago"}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.column2}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#0D5C63", "#1A7A83"]}
            style={styles.row4}
          >
            <TouchableOpacity style={styles.button2} onPress={() => {}}>
              <Text style={styles.text3}>{"96"}</Text>
            </TouchableOpacity>
            <View style={styles.column3}>
              <View style={styles.view4}>
                <Text style={styles.text6}>{"AI Match Score"}</Text>
              </View>
              <View style={styles.view5}>
                <Text style={styles.text7}>
                  {"Excellent · 19 of 20 requirements met"}
                </Text>
              </View>
            </View>
            <View style={styles.box}></View>
          </LinearGradient>
          <View style={styles.column4}>
            <View style={styles.view6}>
              <Text style={styles.text8}>{"SCREENING ANSWERS"}</Text>
            </View>
            <View style={styles.column5}>
              <View style={styles.view7}>
                <Text style={styles.text9}>{"Years with Figma?"}</Text>
              </View>
              <View>
                <Text style={styles.text10}>
                  {"6 years — daily professional use"}
                </Text>
              </View>
              <View style={styles.line}></View>
              
            </View>
            <View style={styles.column6}>
              <View style={styles.view7}>
                <Text style={styles.text9}>{"Portfolio link?"}</Text>
              </View>
              <View>
                <Text style={styles.text10}>{"elan-tran.vercel.app"}</Text>
              </View>
              <View style={styles.line}></View>
            </View>
            <View style={styles.column7}>
              <View style={styles.view7}>
                <Text style={styles.text9}>{"Authorized to work in VN?"}</Text>
              </View>
              <View>
                <Text style={styles.text10}>{"Yes, Da Nang citizen"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.column8}>
            <View style={styles.view6}>
              <Text style={styles.text8}>{"CONTACT"}</Text>
            </View>
            <View style={styles.row5}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/2ffrxbi9_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image5}
              />
              <View style={styles.view8}>
                <Text style={styles.text11}>{"sarah@email.com"}</Text>
              </View>
            </View>
            <View style={styles.row5}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/9j5v4o98_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image5}
              />
              <View style={styles.view8}>
                <Text style={styles.text11}>{"+1 (415) 555-0192"}</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/4rcjsmee_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image5}
              />
              <View style={styles.view8}>
                <Text style={styles.text11}>{"sarahjohnson.design"}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button3} onPress={() => props.onNavigate("interviewinvite")}>
            <Text style={styles.text12}>{"Move to interview"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  fixedHeader: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    zIndex: 10,
  },
  backButtonContainer: {
    width: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#0D5C631F",
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    color: "#0D5C63",
    fontSize: 18,
    fontWeight: "bold",
  },
  box: {
    width: 48,
    height: 48,
  },
  button: {
    backgroundColor: "#FEF2F2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button2: {
    backgroundColor: "#FFFFFF24",
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginRight: 14,
  },
  button3: {
    alignItems: "center",
    backgroundColor: "#0D5C63",
    borderRadius: 14,
    paddingVertical: 15,
    marginBottom: 160,
    marginHorizontal: 20,
    shadowColor: "#0D5C634D",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 20,
    elevation: 20,
  },
  column: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  column2: {
    borderColor: "#0D5C6312",
    borderWidth: 1,
    paddingTop: 10,
  },
  column3: {
    flex: 1,
    paddingVertical: 4,
    paddingRight: 1,
    marginRight: 14,
  },
  column4: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginBottom: 16,
    marginHorizontal: 20,
  },
  column5: {
    paddingBottom: 12,
    marginBottom: 10,
  },
  column6: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 12,
    marginBottom: 10,
  },
  column7: {
    paddingBottom: 12,
  },
  column8: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 13,
    marginBottom: 16,
    marginHorizontal: 20,
    shadowColor: "#00000008",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
  },
  image4: {
    width: 36,
    height: 36,
  },
  image5: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 3,
    marginBottom: 8,
    marginTop: 30,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 13,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F9F5F0",
  },
  text2: {
    color: "#E05B5B",
    fontSize: 12,
    fontWeight: "bold",
  },
  text3: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  text4: {
    color: "#1A1828",
    fontSize: 18,
    fontWeight: "bold",
  },
  text5: {
    color: "#8A88A8",
    fontSize: 12,
  },
  text6: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },
  text7: {
    color: "#ffffff94",
    fontSize: 11,
    fontWeight: 300,
    width: 250,
  },
  text8: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: 600,
  },
  text9: {
    color: "#8A88A8",
    fontSize: 11,
  },
  text10: {
    color: "#1A1828",
    fontSize: 12,
    fontWeight: "bold",
  },
  text11: {
    color: "#1A1828",
    fontSize: 12,
  },
  text12: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  view: {
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 11,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  view2: {
    alignSelf: "flex-start",
    paddingRight: 18,
  },
  view3: {
    alignSelf: "flex-start",
  },
  view4: {
    alignSelf: "flex-start",
    marginBottom: 9,
  },
  view5: {
    marginLeft: 1,
  },
  view6: {
    paddingBottom: 1,
    marginBottom: 10,
  },
  view7: {
    paddingBottom: 1,
    marginBottom: 2,
  },
  view8: {
    paddingBottom: 1,
  },
  line: {
    height: 1,
    backgroundColor: "#ebf4f5",
    marginTop: 20,
    marginBottom: -10,
  },
});
