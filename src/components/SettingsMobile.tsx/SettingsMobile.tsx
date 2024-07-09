import { DarkModeButton } from '../ButtonToogle/DarkModeButton';
import { ButtonToogleUnit } from '../ButtonToogleUnit/ButtonToogleUnit';

const SettingsMobile = () => {
  return (
    <div className="mt-4 px-4">
      <h1 className="text-2xl text-center py-9">Settings</h1>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <h2 className="text-lg">Dark Mode</h2>
          <DarkModeButton />
        </div>
        <div className="flex items-center gap-5">
          <h2 className="text-lg">Unit Toggle</h2>
          <ButtonToogleUnit />
        </div>
      </div>
    </div>
  );
}

export { SettingsMobile };
