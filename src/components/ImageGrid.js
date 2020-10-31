import React from 'react';
import { motion } from 'framer-motion';

import useFirestore from '../hooks/useFirestore';

function ImageGrid({ setSelectedImage }) {
  const { docs } = useFirestore('pictures');

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
            whileHover={{ opacity: 1, cursor: 'pointer' }}
            layout
          >
            <motion.img
              src={doc.url}
              alt={doc.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
