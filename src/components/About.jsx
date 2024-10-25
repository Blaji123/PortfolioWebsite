/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className="xs:w-[250px] w-full">
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//         >
//           <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//           <h3 className="text-white text-[20px] font-bold text-center">
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Summary</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hey there, I am David, a passionate student immersed in the world of
        Computer Science at UBB College. Curiosity has always been my driving
        force, propelling me to delve deeper into the intricate realm of
        technology. <br /> <br />
        As I journey through my academic endeavors, I find myself drawn to the
        complexities of backend development. The intricacies of server logic and
        database management fuel my curiosity, pushing me to unravel new
        challenges and refine my skills. <br /> <br />
        This portfolio serves as a testament to my dedication and enthusiasm for
        backend development. It is not just a showcase of my projects; it is a
        testament to my eagerness to contribute meaningfully to the digital
        landscape.
        <br /> <br /> So, join me on this journey as I strive to turn innovative
        ideas into robust solutions, one line of code at a time.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
