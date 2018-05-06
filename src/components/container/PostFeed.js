import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Post } from '../presentation';

class PostFeed extends Component {

  _renderPost(){
    return <Post/>;
  }

  _returnKey(item){
    return item.toString();
  }

  render () {
    return (
      <FlatList
        data={[1,2,3]}
        keyExtractor={item => this._returnKey(item)}
        renderItem={() => this._renderPost()}/>
    );
  }
}

export default PostFeed;
