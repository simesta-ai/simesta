import { Text, View } from 'react-native';
import styles from "../../styles/screens/notifications.style";
import { useEffect } from 'react';

const NotificationContainer = ({ notifications }) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);
  const lastMonth = new Date(today);
  lastMonth.setDate(today.getDate() - 30);

  const parseDate = (dateStr) => {
    const [day, month , year] = dateStr.split(" ");
    return new Date(year, month, day);
  };

  
  const categorizedNotifications = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: [],
    older: [],
  };

  notifications.forEach((not) => {
    const notDate = parseDate(not.date);
    if (notDate.toDateString() === today.toDateString()) {
      categorizedNotifications.today.push(not);
    } else if (notDate.toDateString() === yesterday.toDateString()) {
      categorizedNotifications.yesterday.push(not);
    } else if (notDate >= lastWeek) {
      categorizedNotifications.lastWeek.push(not);
    } else if (notDate >= lastMonth) {
      categorizedNotifications.lastMonth.push(not);
    } else {
      categorizedNotifications.older.push(not);
    }
  });

  return (
    <View>
      {Object.entries(categorizedNotifications).map(([section, items]) => (
        items.length > 0 && (
          <View key={section}>
            <Text style={styles.sectionTitle}>{section.toUpperCase()}</Text>
            {items.map((not, index) => (
              <View key={index}>
                <Text style={styles.notificationText}>{not.notification.title}</Text>
              </View>
            ))}
          </View>
        )
      ))}
    </View>
  );
};

export default NotificationContainer;
