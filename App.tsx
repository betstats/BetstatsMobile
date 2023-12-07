import { StackNavigator } from './src/navigator/StackNavigator';
import { AppProvider } from './src/components/AppProvider';

export default function App() {
  return (
    <AppProvider>
      <StackNavigator />
    </AppProvider>
  );
}
