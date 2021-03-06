'use strict';

import React, {
    Component,
    View,
    StyleSheet,
    AppRegistry
} from 'react-native';

import Calendar from './src/Calendar';


class DayPicker extends Component {
    render() {
        var from = new Date();
        from.setDate(from.getDate() - 16);
        var to = new Date();

        return (
            <View style={styles.container}>
                <Calendar
                    monthsCount={24}
                    startFormMonday={true}
                    selectFrom={from}
                    selectTo={to}
                    onSelectionChange={(current, previous) => {
                        console.log(current, previous);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    }
});

AppRegistry.registerComponent('DayPicker', () => DayPicker);
