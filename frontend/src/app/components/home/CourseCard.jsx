import { motion } from "motion/react";
import { Link } from "react-router-dom";
import StarRating from "../ui/StarRating";

function ArrowUpRightIcon({ color = "#6D737A" }) {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 18L18 6" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M8.25 6H18V15.75" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export default function CourseCard({ course, index, highlighted = false }) {
  const { id, title, category, price, rating, reviews, image, isAd } = course;
  return (
    <motion.div
      className="flex-shrink-0 w-[320px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/course/${id}`} className="block h-full" aria-label={`View ${title}`}>
        <motion.article
          className="bg-white rounded-2xl overflow-hidden h-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100"
          whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(20,98,122,0.12)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-52 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
            {isAd && (
              <span className="absolute top-4 right-4 bg-[#14627a] text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase shadow-md z-10 border border-white/20">
                AD
              </span>
            )}
            <span className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-md text-sm font-medium text-[#1b1d1f] shadow-sm">
              {category?.name || category}
            </span>
          </div>

          <div className="p-5">
            <h3 className="text-[18px] font-medium text-[#363a3d] mb-3 truncate">{title}</h3>

            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={rating} />
              <span className="text-[16px] text-[#52565c]">({reviews})</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[24px] font-semibold text-[#1b1d1f]">
                ${price.toLocaleString()}
              </span>
              <motion.div
                className={`p-2.5 rounded-lg ${highlighted
                  ? "bg-[#14627a] shadow-[0_8px_16px_rgba(20,98,122,0.2)]"
                  : "bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100"
                  }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-hidden="true"
              >
                <ArrowUpRightIcon color={highlighted ? "white" : "#6D737A"} />
              </motion.div>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
