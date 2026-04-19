export const lightThem = {
    // Main screen background (SafeAreaView in addTask, main View in FocusTime)
    background: '#FFFFFF',
    backgroundImage: require('../../assets/lightBackground.jpeg'),
    // Background for the task list card/container at the bottom of addTask
    backgroundSecondary: '#F5F5F5',

    // Main text color (Timer, Task Name, "Add Task" header, "Back" text, task items)
    textPrimary: '#000000',

    // Secondary text color ("Recent Task" subtitle)
    textSecondary: '#555555',

    // Muted text color (can be used for inactive states or placeholders)
    textMuted: '#888888',

    // Background color of the selected time pill (e.g., when "today" is selected)
    accent: '#88ced2',

    // Background color for the "Start/Pause" button in FocusTime
    startButton: '#67d45d',

    // Border color for the "Start/Pause" button in FocusTime (originally 'blue')
    startButtonBorder: 'blue',

    // Background color for the time selection circles (6, 15, 25 mins) in FocusTime
    timeBoxBackground: '#b3a6c0',

    // Border color for the time selection circles in FocusTime (originally 'white')
    timeBoxBorder: '#CCCCCC',

    // Border color for the recent time pills ("today", "yesterday", etc.)
    border: '#e7d4d2',

    // Border color for the horizontal divider line under the task name in FocusTime
    borderSecondary: '#a19292',

    // Color for the main horizontal lines next to "Add Task" (originally 'red')
    linePrimary: 'red',

    // Color for the smaller horizontal lines next to "Recent Task"
    lineSecondary: '#a19292',

    // Border color for the individual task items inside the task list
    taskCardBorder: '#000000',

    // Background color for the individual task items inside the task list
    taskCardBackground: 'transparent',

    // Background color for the text input field in addTask
    inputBackground: '#FFFFFF',

    // Border color for the text input field in addTask
    inputBorder: '#CCCCCC',

    // Placeholder text color for the input ("add task")
    inputPlaceholder: '#999999',

    // Color for the "+" (add-circle-outline) icon in addTask & Back chevron in FocusTime
    iconPrimary: '#000000',

    // Status bar style ('dark-content' for light mode)
    statusBarStyle: 'dark-content',

    // Opacity for the time selection circles and start button in FocusTime
    cardOpacity: 0.7,

    // Opacity for the smaller horizontal lines next to "Recent Task" (originally 0.6)
    lineOpacity: 0.6,
};

export const darkThem = {
    // Main screen background (SafeAreaView in addTask, main View in FocusTime)
    background: '#1A1A2E',
    backgroundImage: require('../../assets/background.jpeg'),
    // Background for the task list card/container at the bottom of addTask
    backgroundSecondary: '#16213E',

    // Main text color (Timer, Task Name, "Add Task" header, "Back" text, task items)
    textPrimary: '#FFFFFF',

    // Secondary text color ("Recent Task" subtitle)
    textSecondary: '#B0B0B0',

    // Muted text color (can be used for inactive states or placeholders)
    textMuted: '#777777',

    // Background color of the selected time pill (e.g., when "today" is selected)
    accent: '#5DADE2',

    // Background color for the "Start/Pause" button in FocusTime
    startButton: '#2ECC71',

    // Border color for the "Start/Pause" button in FocusTime 
    startButtonBorder: '#5DADE2',

    // Background color for the time selection circles (6, 15, 25 mins) in FocusTime
    timeBoxBackground: '#2C3E50',

    // Border color for the time selection circles in FocusTime
    timeBoxBorder: '#5DADE2',

    // Border color for the recent time pills ("today", "yesterday", etc.)
    border: '#34495E',

    // Border color for the horizontal divider line under the task name in FocusTime
    borderSecondary: '#34495E',

    // Color for the main horizontal lines next to "Add Task"
    linePrimary: '#E74C3C',

    // Color for the smaller horizontal lines next to "Recent Task"
    lineSecondary: '#34495E',

    // Border color for the individual task items inside the task list
    taskCardBorder: '#5DADE2',

    // Background color for the individual task items inside the task list
    taskCardBackground: 'rgba(44, 62, 80, 0.5)',

    // Background color for the text input field in addTask
    inputBackground: '#2C3E50',

    // Border color for the text input field in addTask
    inputBorder: '#34495E',

    // Placeholder text color for the input ("add task")
    inputPlaceholder: '#777777',

    // Color for the "+" (add-circle-outline) icon in addTask & Back chevron in FocusTime
    iconPrimary: '#FFFFFF',

    // Status bar style ('light-content' for dark mode)
    statusBarStyle: 'light',

    // Opacity for the time selection circles and start button in FocusTime
    cardOpacity: 0.8,

    // Opacity for the smaller horizontal lines next to "Recent Task"
    lineOpacity: 0.5,
};