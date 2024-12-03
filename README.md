# 🌡️ WBGT-Alert-System

### Automated Heat Stress Monitoring & Alert System for Industrial Safety

[![GitHub forks](https://img.shields.io/github/forks/TheToriqul/wbgt-alert-system?style=for-the-badge)](https://github.com/TheToriqul/wbgt-alert-system/network)
[![GitHub stars](https://img.shields.io/github/stars/TheToriqul/wbgt-alert-system?style=for-the-badge)](https://github.com/TheToriqul/wbgt-alert-system/stargazers)
[![Microsoft Forms](https://img.shields.io/badge/Microsoft-Forms-2B579A?style=for-the-badge&logo=microsoft&logoColor=white)](https://www.microsoft.com/en-us/microsoft-365/forms)
[![Power Automate](https://img.shields.io/badge/Power-Automate-0066FF?style=for-the-badge&logo=power-automate&logoColor=white)](https://flow.microsoft.com/)
[![Telegram](https://img.shields.io/badge/Telegram-Bot-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://telegram.org/)
[![Google Forms](https://img.shields.io/badge/Google-Forms-0F9D58?style=for-the-badge&logo=google&logoColor=white)](https://www.google.com/forms/about/)
[![Apps Script](https://img.shields.io/badge/Google-Apps%20Script-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://www.google.com/script/start/)


## 📋 Overview

WBGT-Alert-System is an automated temperature monitoring solution that ensures worker safety through real-time heat stress monitoring. The system integrates Microsoft Forms for data collection, Power Automate for intelligent processing, and Telegram for instant alerts.

## 🏗️ System Architecture

<figure >
  <p align="center">
      <img src="./images/architecture.png" alt="project architecture" />
      <p align="center">Project Architecture</p> 
  </p>
</figure>

## 🌟 Key Features

- 🌡️ Real-time WBGT monitoring and alerts
- 🚨 Three-tier temperature classification
- 📱 Instant Telegram notifications
- 🔄 Automated safety guidelines
- 📝 Digital documentation
- ⚡ Quick response system

## 💡 Alert Levels and Actions

| **Level**   | **Temp.** | **Alert** | **Guidelines**                                                                      |
|-------------|-----------|-----------|------------------------------------------------------------------------------------|
| **HIGH**    | ≥33°C     | ☀️☀️        | - Minimize outdoor activities<br>- 15-min breaks hourly<br>- Mandatory hydration  |
| **MODERATE**| ≥31°C     | 🌤️         | - Reduce outdoor activities<br>- 10-min breaks hourly<br>- Regular hydration      |
| **LOW**     | <31°C     | 🌥️         | - Normal activities<br>- Regular breaks<br>- Standard hydration                   |

## 🛠️ Technology Stack

- **Data Collection**: Microsoft Forms
- **Automation**: Power Automate
- **Alerts**: Telegram Bot API
- **Documentation**: Markdown

## 📁 WBGT-Alert-System Project Structure

```
WBGT-Alert-System/
├── docs/
│   ├── maintenance-guide.md
│   ├── user-guidelines.md
│   ├── additional-features.md
│   └── backup-plan.md
├── flows/
│   ├── production/
│   │   └── wbgt-alert-flow.json
│   └── backup/
│       └── wbgt-alert-backup.json
├── google/
│   ├── form/
│   │   └── form-template.json
│   └── src/
│       └── script.gs
├── forms/
│   └── wbgt-form-template.json
├── images/
│   ├── flow-screenshots/
│   └── form-screenshots/
├── templates/
│   └── message-templates.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## 🚀 Setup Guide

### 1. Microsoft Form Setup

1. Create new form
2. Add required fields:
   - Weather Condition (Choice)
   - Time (Choice)
   - WBGT Reading (Number)
   - Tested By (Text)
3. Set validation rules

### 2. Power Automate Configuration

1. Create automated flow
2. Add Microsoft Forms trigger
3. Configure temperature conditions
4. Set up message templates
5. Add Telegram connection

### 3. Telegram Integration

1. Create bot via BotFather
2. Set up channel
3. Add bot to channel
4. Configure permissions

## 📊 System Flow

1. Safety officer submits WBGT reading via Microsoft Form
2. Power Automate processes the submission
3. System evaluates temperature level
4. Appropriate guidelines are selected
5. Alert is formatted and sent
6. Channel members receive notification

## 📚 Documentation

Comprehensive guides available in docs folder:

- [System Maintenance Guide](./docs/maintenance-guide.md)
- [User Guidelines](./docs/user-guidelines.md)
- [Additional Features](./docs/feature-roadmap.md)
- [Backup Plans](./docs/backup-plan.md)

## 🔐 Security Features

- Private channel communication
- Authenticated form access
- Secure bot token
- Validated data processing

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines before submitting pull requests. Please read details [contribution guidelines](./CONTRIBUTING.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 📧 Connect with Me

- 📧 Email: toriqul.int@gmail.com
- 📱 Phone: +65 8936 7705, +8801765 939006
- 🌐 LinkedIn: [@TheToriqul](https://www.linkedin.com/in/thetoriqul/)
- 🐙 GitHub: [@TheToriqul](https://github.com/TheToriqul)
- 🌍 Portfolio: [TheToriqul.com](https://thetoriqul.com)

---

Developed with ❤️ by TheToriqul for industrial safety
