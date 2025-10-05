import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { config } from '../config';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-light to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-poppins text-center text-darkText mb-4"
          >
            Experience & Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"
          />

          <div className="max-w-5xl mx-auto">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold font-poppins text-darkText mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Work Experience
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

                {/* Experience Items */}
                {config.experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + idx * 0.2 }}
                    className="relative pl-8 md:pl-20 pb-12 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[-8px] md:left-[23px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg" />

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold font-poppins text-darkText">
                          {exp.title}
                        </h4>
                        <span className="text-sm font-inter text-white bg-primary px-3 py-1 rounded-full mt-2 md:mt-0 inline-block w-fit">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-base font-inter font-semibold text-primary mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm font-inter text-mutedText mb-4">
                        {exp.location}
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-inter text-mutedText leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3 className="text-3xl font-bold font-poppins text-darkText mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                Education
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-primary" />

                {/* Education Items */}
                {config.education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 + idx * 0.2 }}
                    className="relative pl-8 md:pl-20 pb-12 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[-8px] md:left-[23px] top-0 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg" />

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/30">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold font-poppins text-darkText">
                          {edu.degree}
                        </h4>
                        <span className="text-sm font-inter text-white bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0 inline-block w-fit">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-base font-inter font-semibold text-secondary mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm font-inter text-mutedText mb-2">
                        {edu.location}
                      </p>
                      {edu.details && (
                        <p className="text-sm font-inter text-mutedText italic mt-3 bg-light p-3 rounded-lg">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
