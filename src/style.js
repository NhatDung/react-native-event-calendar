// @flow
import { Platform, StyleSheet } from 'react-native';

// const eventPaddingLeft = 4
const leftMargin = 50 - 1;

export default function styleConstructor(theme = {}, calendarHeight) {
  let style = {
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      ...theme.container,
    },
    contentStyle: {
      backgroundColor: '#ffff',
      height: calendarHeight + 30,
      ...theme.contentStyle,
    },
    header: {
      paddingHorizontal: 30,
      height: 50,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#E6E8F0',
      backgroundColor: '#F5F5F6',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      ...theme.header,
    },
    headerTextContainer: {
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 16,
      ...theme.headerText,
    },
    arrow: {
      width: 15,
      height: 15,
      resizeMode: 'contain',
    },
    arrowButton: {
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      ...theme.arrowButton,
    },
    event: {
      position: 'absolute',
      backgroundColor: '#F0F4FF',
      opacity: 0.8,
      borderColor: '#DDE5FD',
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
      minHeight: 25,
      flex: 1,
      overflow: 'hidden',
      ...theme.event,
    },
    eventTitle: {
      color: '#615B73',
      fontWeight: '600',
      minHeight: 15,
      ...theme.eventTitle,
    },
    eventSummary: {
      color: '#615B73',
      fontSize: 12,
      flexWrap: 'wrap',
      ...theme.eventSummary,
    },
    eventTimes: {
      marginTop: 3,
      fontSize: 10,
      fontWeight: 'bold',
      color: '#615B73',
      flexWrap: 'wrap',
      ...theme.eventTimes,
    },
    line: {
      position: 'absolute',
      left: leftMargin,
      borderWidth: 1,
      borderStyle: 'dotted',
      borderRadius: 0.5,
      borderColor: 'rgb(216,216,216)',
      ...theme.line,
    },
    lineNow: {
      height: 1,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'red',
      ...theme.lineNow,
    },
    timeLabel: {
      position: 'absolute',
      left: 15,
      color: 'rgb(170,170,170)',
      fontSize: 10,
      fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
      fontWeight: '500',
      ...theme.timeLabel,
    },
  };
  return StyleSheet.create(style);
}
