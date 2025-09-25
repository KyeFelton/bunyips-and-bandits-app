import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Articles from "../wiki";
import { WikiPage } from "../components/WikiPage";

export function Wiki() {
  const { category, id } = useParams();
  console.log(Articles);
  const article = Articles.find((a) => a.category === category && a.id === id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {article && <WikiPage {...article} />}
    </motion.div>
  );
}
