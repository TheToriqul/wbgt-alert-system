// MOM WBGT READING V1.0

// Telegram Bot Configuration
const BOT_TOKEN = '<botTokenFromBotFather>';
const CHANNEL_ID = '<channelIdFromApi>';  // Production channel: WBGT Reading

function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify({
      'chat_id': CHANNEL_ID,
      'text': message,
      'parse_mode': 'HTML',
      'disable_web_page_preview': true
    })
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    Logger.log('Message sent successfully to Telegram channel');
    Logger.log(response.getContentText());
  } catch(e) {
    Logger.log('Error sending message to Telegram: ' + e.toString());
    Logger.log('Message that failed: ' + message);
  }
}

function generateWBGTMessage(temperature, timing) {
  try {
    // Convert temperature to number to ensure proper comparison
    const temp = Number(temperature);

    // Determine heat stress level
    let stressLevel = '';
    if (temp >= 33) {
      stressLevel = '☀☀ HIGH ☀☀';
    } else if (temp >= 31) {
      stressLevel = '🌤 MODERATE 🌤';
    } else {
      stressLevel = '🌥 LOW 🌥';
    }

    // Get formatted date
    const today = new Date();
    const formattedDate = Utilities.formatDate(today, 'Asia/Singapore', 'dd-MMM-yy').toUpperCase();

    // Generate activity and action guidelines
    let activityGuidelines = '';
    if (temp >= 33) {
      activityGuidelines = 'ACTIVITY: Minimize outdoor activities. Ensure workers get adequate rest under shade for recovery from heat.\n\nACTION: Rehydrate at least hourly and arrange for 15 mins break for heavy physical work activity.';
    } else if (temp >= 32) {
      activityGuidelines = 'ACTIVITY: Reduce outdoor activities. Ensure workers get adequate rest under shade for recovery from heat.\n\nACTION: Rehydrate at least hourly and arrange for 10 mins break for heavy physical work activity.';
    } else if (temp >= 31) {
      activityGuidelines = 'ACTIVITY: Reduce outdoor activities. Ensure workers get adequate rest under shade for recovery from heat.\n\nACTION: Rehydrate at least hourly.';
    } else {
      activityGuidelines = 'ACTIVITY: Continue normal activities and ensure workers get adequate rest under shade for recovery from heat.\n\nACTION: Rehydrate regularly.';
    }

    // Construct the complete message
    const message = 'MOM WBGT READING V1.0\n\n' +
                   'HEAT STRESS LEVEL: ' + stressLevel + '\n\n' +
                   'DATE: ' + formattedDate + '\n' +
                   'TIME: ' + timing + '\n' +
                   'WBGT Reading = ' + temperature + '°C\n\n' +
                   activityGuidelines;

    return message;
  } catch(error) {
    Logger.log('Error generating message: ' + error.toString());
    return null;
  }
}

function onFormSubmit(e) {
  try {
    const formResponse = e.response;
    const itemResponses = formResponse.getItemResponses();

    let temperature = null;
    let timing = null;

    // Get values from form responses
    itemResponses.forEach(response => {
      const title = response.getItem().getTitle().trim();
      Logger.log('Processing field: ' + title);

      if (title === 'Temperature') {
        temperature = response.getResponse().trim();
      } else if (title === 'Time') {
        timing = response.getResponse().trim();
      }
    });

    Logger.log('Temperature: ' + temperature);
    Logger.log('Time: ' + timing);

    if (!temperature || !timing) {
      Logger.log('Required fields are missing');
      return;
    }

    const wbgtMessage = generateWBGTMessage(temperature, timing);
    if (wbgtMessage) {
      sendToTelegram(wbgtMessage);
    }

  } catch(error) {
    Logger.log('Error in form submission: ' + error.toString());
  }
}

// Test function - Use this to verify the system
function testTelegramBot() {
  const testMessage = generateWBGTMessage('32.5', '1430 Hrs');
  if (testMessage) {
    Logger.log('Test message: ' + testMessage);
    sendToTelegram(testMessage);
  }
}