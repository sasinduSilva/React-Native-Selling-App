import React from 'react';
import Screen from '../components/Screen';
import ListItems from './ListItems';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';
import ListItemSeperator from '../components/ListItemSeperator';



const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,

        }
    },

    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,

        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItems
                    title="Mosh Hamedani"
                    subTitle="programmingwithmosh@gmail.com"
                    image={require('../assets/mosh.jpg')}

                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) =>
                        <ListItems
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}

                                />
                            }
                        />

                    }
                />
            </View>
            <ListItems
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }

            />
        </Screen>
    );
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 20,
    },
    screen: {

        backgroundColor: colors.light,


    },

})

export default AccountScreen;