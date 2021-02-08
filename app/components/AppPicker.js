import React from 'react';
import { View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppTextInput from './AppTextInput';
import AppText from './AppText';
import { useState } from 'react/cjs/react.development';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (<MaterialCommunityIcons name={icon} size={30} color={defaultStyles.colors.medium} style={styles.icon} />)}
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    {icon && (<MaterialCommunityIcons name="chevron-down" size={30} color={defaultStyles.colors.medium} />)}

                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => <PickerItem
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10


    },
    icon: {
        marginRight: 10,

    },
    text: {
        flex: 1,
    }

})

export default AppPicker;