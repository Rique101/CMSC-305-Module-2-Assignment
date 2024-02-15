import React from 'react';
import styles from './styles';
import {View, TouchableOpacity, Text} from 'react-native'

const MeetingsScreen = props => {

  return (
    <view style = {styles.container}>
        <view style={styles.bottom}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('Add Meeting!')}>
                <Text style={styles.buttonText}> Add Host</Text>
            </TouchableOpacity>
        </view>
    </view>

  );
};

export default MeetingsScreen;