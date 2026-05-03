import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixedHeader}>
        <View style={styles.row3}>
          <TouchableOpacity onPress={() => props.onNavigate("applicationdetails")}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/90hgzfwo_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.image4}
            />
          </TouchableOpacity>
          <View>
            <View style={styles.view}>
              <Text style={styles.text2}>{"Invite to interview"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text3}>
                {"Sarah Johnson · Sr. Product Designer"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <Text style={styles.text4}>{"Interview Type"}</Text>
          <View style={styles.row4}>
            <View style={styles.column2}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/mp37b0bb_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image5}
              />
              <View style={styles.view3}>
                <Text style={styles.text5}>{"Video Call"}</Text>
              </View>
            </View>
            <View style={styles.column3}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/ohjzjs3p_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image5}
              />
              <View style={styles.view3}>
                <Text style={styles.text6}>{"Phone"}</Text>
              </View>
            </View>
            <View style={styles.column4}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/2fazxk2x_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image5}
              />
              <View style={styles.view3}>
                <Text style={styles.text6}>{"On-site"}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text4}>{"Proposed Time Slots"}</Text>
          <View style={styles.column5}>
            <View style={styles.row5}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/csb8ftcv_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image6}
              />
              <View style={styles.column6}>
                <View style={styles.view4}>
                  <Text style={styles.text7}>{"Thu, Apr 4 · 2:00 PM PST"}</Text>
                </View>
                <View>
                  <Text style={styles.text8}>{"60 min · Google Meet"}</Text>
                </View>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/2fpplgs8_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image7}
              />
            </View>
            <View style={styles.row6}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/l10qi0mh_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image6}
              />
              <View style={styles.column7}>
                <View style={styles.view4}>
                  <Text style={styles.text9}>
                    {"Fri, Apr 5 · 10:00 AM PST"}
                  </Text>
                </View>
                <View>
                  <Text style={styles.text8}>{"60 min · Google Meet"}</Text>
                </View>
              </View>
            </View>
            <View style={styles.row6}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kIMs9oBBUY/igbsan6x_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image6}
              />
              <View style={styles.column7}>
                <View style={styles.view4}>
                  <Text style={styles.text9}>
                    {"Mon, Apr 8 · 09:00 AM PST"}
                  </Text>
                </View>
                <View>
                  <Text style={styles.text8}>{"60 min · Google Meet"}</Text>
                </View>
              </View>
            </View>
            <View style={styles.column8}>
              <View style={styles.view5}>
                <Text style={styles.text10}>{"Email Preview"}</Text>
              </View>
              <View style={styles.view6}>
                <Text style={styles.text11}>
                  {
                    '"Hi Sarah, We\'d love to invite you to a Technical Interview for the Senior Product Designer role at Figma. Please select a time that works best for you..."'
                  }
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.onNavigate("interviewsucces")}
          >
            <Text style={styles.text12}>{"Send interview invitation"}</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    zIndex: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0D5C63",
    borderRadius: 14,
    paddingVertical: 15,
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
    marginHorizontal: 20,
    marginTop: 16,
  },
  column2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EBF6F7",
    borderColor: "#0D5C63",
    borderRadius: 13,
    borderWidth: 1,
    paddingVertical: 13,
    marginRight: 8,
  },
  column3: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#0D5C6312",
    borderRadius: 13,
    borderWidth: 1,
    paddingVertical: 13,
    marginRight: 8,
  },
  column4: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#0D5C6312",
    borderRadius: 13,
    borderWidth: 1,
    paddingVertical: 13,
  },
  column5: {
    marginBottom: 16,
  },
  column6: {
    flex: 1,
    paddingBottom: 1,
    marginRight: 10,
  },
  column7: {
    flex: 1,
    paddingBottom: 1,
  },
  column8: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 13,
    shadowColor: "#00000008",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
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
    borderRadius: 13,
    width: 94,
    height: 27,
    marginBottom: 4,
  },
  image6: {
    borderRadius: 12,
    width: 16,
    height: 16,
    marginRight: 10,
  },
  image7: {
    borderRadius: 12,
    width: 16,
    height: 16,
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
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 0,
    marginTop: 28,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EBF6F7",
    borderColor: "#0D5C63",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginBottom: 16,
  },
  row6: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#0D5C6312",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F9F5F0",
    paddingBottom: 151,
  },
  text: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
  },
  text2: {
    color: "#1A1828",
    fontSize: 18,
    fontWeight: "bold",
  },
  text3: {
    color: "#8A88A8",
    fontSize: 12,
  },
  text4: {
    color: "#4A4868",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text5: {
    color: "#0D5C63",
    fontSize: 11,
    fontWeight: "bold",
  },
  text6: {
    color: "#4A4868",
    fontSize: 11,
  },
  text7: {
    color: "#0D5C63",
    fontSize: 13,
    fontWeight: "bold",
  },
  text8: {
    color: "#8A88A8",
    fontSize: 11,
  },
  text9: {
    color: "#1A1828",
    fontSize: 13,
    fontWeight: "bold",
  },
  text10: {
    color: "#4A4868",
    fontSize: 12,
    fontWeight: "bold",
  },
  text11: {
    color: "#4A4868",
    fontSize: 12,
    opacity: 0.8,
    lineHeight: 20,
  },
  text12: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  view: {
    alignSelf: "flex-start",
    paddingBottom: 1,
    paddingRight: 53,
  },
  view2: {
    alignSelf: "flex-start",
    paddingBottom: 1,
  },
  view3: {
    alignItems: "center",
    marginHorizontal: 9,
  },
  view4: {
    paddingBottom: 1,
  },
  view5: {
    paddingBottom: 1,
    marginBottom: 6,
  },
  view6: {
    paddingBottom: 1,
    paddingRight: 3,
    
  },
});
