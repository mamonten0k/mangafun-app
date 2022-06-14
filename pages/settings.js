import { Provider } from '../components/layouts';
import { SettingsPage } from '../components/templates';

export default function Home() {
  return (
    <Provider>
      <SettingsPage />
    </Provider>
  );
}
