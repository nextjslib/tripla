import { FC } from 'react';
import { CloseOutlined } from '@ant-design/icons';

const SignInBannerClose: FC = () => (
  <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3 text-white text-xl">
    <button
      type="button"
      className="-mr-1 flex p-2 rounded-md hover:bg-blue-800 focus:outline-none sm:-mr-2"
    >
      <span className="sr-only">Dismiss</span>
      <CloseOutlined />
    </button>
  </div>
);

export default SignInBannerClose;
