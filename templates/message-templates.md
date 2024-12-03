# WBGT Alert Message Templates

## Standard Message Format
```
MOM SG WBGT READING V1.0

HEAT STRESS LEVEL: [LEVEL_EMOJI]

DATE: [CURRENT_DATE]
TIME: [TIMING] Hrs
WBGT Reading = [TEMPERATURE]°C

[ACTIVITY_GUIDELINES]

[ACTION_GUIDELINES]
```

## Alert Levels

### HIGH Alert (≥33°C)
```
HEAT STRESS LEVEL: ☀☀ HIGH ☀☀

ACTIVITY: Minimize outdoor activities. Ensure workers get adequate rest under shade for recovery from heat.

ACTION: Rehydrate at least hourly and arrange for 15 mins break for heavy physical work activity.
```

### MODERATE Alert (≥31°C)
```
HEAT STRESS LEVEL: 🌤 MODERATE 🌤

ACTIVITY: Reduce outdoor activities. Ensure workers get adequate rest under shade for recovery from heat.

ACTION: Rehydrate at least hourly and arrange for 10 mins break for heavy physical work activity.
```

### LOW Alert (<31°C)
```
HEAT STRESS LEVEL: 🌥 LOW 🌥

ACTIVITY: Continue normal activities and ensure workers get adequate rest under shade for recovery from heat.

ACTION: Rehydrate regularly.
```