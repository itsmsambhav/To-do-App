import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const TaskDetails = () => {
  return (
    <View style={styles.taskDetails}>
      <View
        style={[styles.systemiosstatusbar, styles.taskTittleParentPosition]}
      >
        <Image
          style={styles.batteryIcon}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.text}>9:41</Text>
        </View>
      </View>
      <View style={[styles.avatarGroup, styles.taskParentPosition]}>
        <View style={styles.avatars}>
          <Image
            style={[styles.avatarIcon, styles.avatarIconLayout]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <Image
            style={[styles.avatarIcon1, styles.avatarIconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/avatar1.png")}
          />
          <Image
            style={[styles.avatarIcon1, styles.avatarIconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/avatar2.png")}
          />
          <Image
            style={[styles.avatarIcon1, styles.avatarIconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/avatar3.png")}
          />
          <Image
            style={[styles.avatarIcon4, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar4.png")}
          />
          <Image
            style={[styles.avatarIcon4, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar5.png")}
          />
          <Image
            style={[styles.avatarIcon4, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar6.png")}
          />
          <Image
            style={[styles.avatarIcon4, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar7.png")}
          />
          <Image
            style={[styles.avatarIcon4, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar8.png")}
          />
          <Image
            style={[styles.avatarIcon4, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar9.png")}
          />
          <View style={[styles.avatar, styles.avatarIconSpaceBlock]}>
            <Text style={styles.text1}>+5</Text>
          </View>
        </View>
        <View style={[styles.avatarAddButton, styles.checkboxBaseLayout]}>
          <View style={[styles.content, styles.inputFlexBox]}>
            <Image
              style={styles.plusIcon}
              contentFit="cover"
              source={require("../assets/plus.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.taskDetails1}>Task Details</Text>
      <View style={[styles.taskDetailsInner, styles.taskParentPosition]}>
        <View style={styles.taskTittleParentPosition}>
          <Text style={[styles.taskTittle, styles.taskTittleTypo]}>
            Task Tittle
          </Text>
          <Text style={styles.nftWebApp}>NFT Web App Prototype</Text>
        </View>
      </View>
      <View style={[styles.descriptionsParent, styles.taskParentPosition]}>
        <Text style={[styles.taskTittle, styles.taskTittleTypo]}>
          Descriptions
        </Text>
        <Text style={[styles.supportingText, styles.taskTittleTypo]}>
          Last year was a fantastic year for NFTs, with the market reaching a
          $40 billion valuation for the first time. In addition, more than $10
          billion worth of NFTs are now sold every week – with NFT..
        </Text>
      </View>
      <View style={[styles.taskListParent, styles.taskParentPosition]}>
        <Text style={[styles.taskTittle, styles.taskTittleTypo]}>
          Task List
        </Text>
        <View style={styles.checkboxParent}>
          <View style={styles.checkboxSpaceBlock}>
            <View style={[styles.input, styles.inputFlexBox]}>
              <Image
                style={styles.checkboxLayout}
                contentFit="cover"
                source={require("../assets/-checkbox-base.png")}
              />
            </View>
            <Text
              style={[styles.text2, styles.textTypo]}
            >{`User Research & Analysis`}</Text>
          </View>
          <View style={[styles.checkbox1, styles.checkboxSpaceBlock]}>
            <View style={[styles.input, styles.inputFlexBox]}>
              <Image
                style={styles.checkboxLayout}
                contentFit="cover"
                source={require("../assets/-checkbox-base.png")}
              />
            </View>
            <Text
              style={[styles.text2, styles.textTypo]}
            >{`Black & White Wireframe`}</Text>
          </View>
          <View style={[styles.checkbox1, styles.checkboxSpaceBlock]}>
            <View style={[styles.input, styles.inputFlexBox]}>
              <View style={[styles.checkboxBase, styles.checkboxLayout]} />
            </View>
            <Text style={[styles.text2, styles.textTypo]}>Design On Figma</Text>
          </View>
          <View style={[styles.checkbox1, styles.checkboxSpaceBlock]}>
            <Image
              style={styles.solidinterfaceplusIcon}
              contentFit="cover"
              source={require("../assets/solidinterfaceplus.png")}
            />
            <Text style={[styles.text5, styles.textTypo]}>Add Task</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.solidinterfacetrashIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/solidinterfacetrash.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskTittleParentPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  taskParentPosition: {
    left: 17,
    position: "absolute",
  },
  avatarIconLayout: {
    height: 27,
    width: 27,
    overflow: "hidden",
  },
  avatarIconSpaceBlock: {
    marginLeft: -4,
    borderRadius: Border.br_181xl,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  checkboxBaseLayout: {
    borderWidth: 1,
    backgroundColor: Color.baseWhite,
  },
  inputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  taskTittleTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
  },
  textTypo: {
    marginLeft: 16,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.textMdMedium_size,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
  },
  checkboxSpaceBlock: {
    paddingBottom: Padding.p_9xs,
    paddingTop: Padding.p_9xs,
    paddingLeft: Padding.p_base,
    height: 72,
    width: 343,
    backgroundColor: Color.grayCool50,
    borderRadius: Border.br_base,
    alignItems: "center",
    flexDirection: "row",
  },
  checkboxLayout: {
    borderRadius: Border.br_51xl,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  batteryIcon: {
    marginTop: -4.67,
    right: 15,
    height: 11,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  text: {
    height: "85.71%",
    top: "9.52%",
    fontSize: 15,
    letterSpacing: -0.3,
    color: Color.grey800,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: "600",
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    marginTop: -10,
    left: 21,
    height: 21,
    width: 54,
    top: "50%",
    position: "absolute",
  },
  systemiosstatusbar: {
    width: 375,
    height: 44,
  },
  avatarIcon: {
    borderRadius: Border.br_181xl,
    height: 27,
    width: 27,
  },
  avatarIcon1: {
    height: 27,
    width: 27,
    overflow: "hidden",
  },
  avatarIcon4: {
    display: "none",
    marginLeft: -4,
    borderRadius: Border.br_181xl,
    overflow: "hidden",
  },
  text1: {
    marginTop: -11,
    marginLeft: -14,
    left: "50%",
    fontSize: FontSize.textXsMedium_size,
    lineHeight: 18,
    color: Color.gray600,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    textAlign: "center",
    width: 24,
    top: "50%",
    position: "absolute",
  },
  avatar: {
    backgroundColor: Color.gray100,
    borderColor: "#fff",
    borderWidth: 2,
    width: 28,
    height: 28,
    borderStyle: "solid",
    display: "none",
  },
  avatars: {
    flexDirection: "row",
  },
  plusIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  content: {
    height: "96%",
    width: "96%",
    top: "0%",
    right: "4%",
    bottom: "4%",
    left: "0%",
    padding: Padding.p_9xs,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  avatarAddButton: {
    borderStyle: "dashed",
    borderColor: "#d0d5dd",
    width: 25,
    height: 25,
    marginLeft: 8,
    borderRadius: Border.br_xs,
    display: "none",
  },
  avatarGroup: {
    top: 332,
    flexDirection: "row",
  },
  taskDetails1: {
    top: 64,
    left: 141,
    color: Color.grayCool900,
    lineHeight: 24,
    fontSize: FontSize.textMdMedium_size,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  taskTittle: {
    color: Color.grayCool500,
    textAlign: "left",
  },
  nftWebApp: {
    fontSize: FontSize.textXlSemibold_size,
    lineHeight: 30,
    color: Color.gray800,
    marginTop: 12,
    textAlign: "left",
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: "600",
  },
  taskDetailsInner: {
    top: 124,
    width: 234,
    height: 62,
  },
  supportingText: {
    width: 342,
    height: 84,
    marginTop: 12,
    textAlign: "left",
    color: Color.grayCool900,
  },
  descriptionsParent: {
    top: 201,
  },
  input: {
    paddingTop: Padding.p_11xs,
  },
  text2: {
    color: Color.grayCool800,
  },
  checkbox1: {
    marginTop: 12,
  },
  checkboxBase: {
    borderColor: "#98a2b3",
    borderWidth: 1,
    backgroundColor: Color.baseWhite,
    borderStyle: "solid",
  },
  solidinterfaceplusIcon: {
    width: 32,
    height: 32,
  },
  text5: {
    color: "#abb6c8",
  },
  checkboxParent: {
    marginTop: 16,
  },
  taskListParent: {
    top: 384,
  },
  solidinterfacetrashIcon: {
    top: 382,
    left: 332,
    position: "absolute",
  },
  taskDetails: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.baseWhite,
  },
});

export default TaskDetails;
