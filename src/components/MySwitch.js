import React from 'react';
import { Switch } from 'react-native';

export default function MySwitch() {
  const [isSwitchEnabled, setSwitch] = React.useState(false);
  return (
    <Switch
      value={isSwitchEnabled}
      onValueChange={value => setSwitch(value)}
      style={{ height: 32, width: 51 }}
      switchBackgroundColor="black"
    />
  );
}
