import { MonFrog } from 'components/MonFrog/MonFrog';
import { Web3Page } from 'components/Web3Page';
import { NextPage } from 'next';

export const MonchainPage: NextPage = () => {
  return (
    <Web3Page>
      <MonFrog />
    </Web3Page>
  );
};

export default MonchainPage;
