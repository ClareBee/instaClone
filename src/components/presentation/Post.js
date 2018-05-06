import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import config from '../../config';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      screenWidth: Dimensions.get("window").width,
      liked: false
    }
  }

  likeToggled () {
    this.setState({
      liked: !this.state.liked
    });
  }
  render () {
    const imageHeight = Math.floor(this.state.screenWidth * 0.95);
    const heartColor = this.state.liked ? "rgb(233, 20, 70)" : null
    return (
      <View style={{ flex: 1, width: 100 + "%"}}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.profilePic}
              source={config.images.profilePhoto} />
            <Text style={{ marginLeft: 10 }}>Clare B</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.likeToggled()}>
          <Image
            style={{ width: this.state.screenWidth, height: imageHeight }}
            source={config.images.dogPhoto} />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image style={[styles.icon, {height: 40, width: 40, tintColor: heartColor}]} source={config.images.heartIcon} />
          <Image style={[styles.icon, {height: 30, width: 35}]} source={config.images.speechIcon} />
          <Image style={[styles.icon, {height: 40, width: 40}]} source={config.images.arrowIcon} />
        </View>
        <View style={styles.commentBar}>
          <Image style={[styles.icon, {height: 30, width: 30, tintColor: heartColor}]} source={config.images.filledHeartIcon} />
          <Text>123 likes</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255, 255, 255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },
  profilePic: {
    borderRadius: 50,
    width: 40,
    height: 40
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(233, 233, 233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginLeft: 5
  },
  commentBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(233, 233, 233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default Post;
