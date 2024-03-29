import { useDonations } from '../../../../../../hooks/useDonations';
import { HEADER_HEIGHT } from '../../../../../../services/utils';
import DonationElement from './DonationElement';
import { motion, AnimatePresence } from 'framer-motion';

const DonationLogs = () => {
  const { donations } = useDonations();
  return (
    <div
      style={{
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        overflowY: 'auto',
      }}>
      <motion.div
        layout
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          gap: '10px',
          justifyContent: 'flex-end',
          paddingRight: '10px',
        }}>
        {donations.map((donation) => {
          return (
            <AnimatePresence>
              <DonationElement donation={donation} key={donation.id} />
            </AnimatePresence>
          );
        })}
      </motion.div>
    </div>
  );
};

export default DonationLogs;
