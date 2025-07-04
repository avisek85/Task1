
import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-vge-blue-dark mb-4">
            About VGE Group
          </h2>
          <p className="text-xl text-gray-600 max-w-9xl mx-auto leading-relaxed">
            The Venkat Geotechnical Engineering (VGE) Private Limited company
            deals with the design and testing of both rock and soil samples for
            engineering purpose. The aim is to conduct filed investigations,
            laboratory testing, Design, and analysis of geotechnical structures.
            To build a bridge between industry requirements and academic
            opportunity to the engineers of Geotechnical Engineering. Our core
            services include geomaterial testing (soil and rock) for both index
            and engineering properties, as well as the detailed design of
            geotechnical structures. With a strong emphasis on quality, safety,
            and innovation, our experienced engineering team ensures that every
            project adheres to the highest standards of geotechnical engineering
            practice.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-vge-orange to-vge-orange-light mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6 h-full">
            {/* Our Mission */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-vge-orange hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
              <h3 className="text-xl font-display font-bold text-vge-blue-dark mb-3 flex items-center gap-3">
                <div className="w-2 h-2 bg-vge-orange rounded-full"></div>
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To provide comprehensive geotechnical solutions tailored to our
                clients' needs, leveraging expertise, and ethical practices to
                deliver sustainable and resilient infrastructure projects that
                positively impact communities and the environment.
              </p>
            </div>

            {/* Our Vision */}
            <div
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-vge-blue-light hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-xl font-display font-bold text-vge-blue-dark mb-3 flex items-center gap-3">
                <div className="w-2 h-2 bg-vge-blue-light rounded-full"></div>
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Empowering sustainable development through geotechnical
                solutions, and pioneering excellence in engineering.
              </p>
            </div>

            {/* Our Values */}
            <div
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-vge-brown hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-xl font-display font-bold text-vge-blue-dark mb-3 flex items-center gap-3">
                <div className="w-2 h-2 bg-vge-brown rounded-full"></div>
                Our Values
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Excellence, innovation, and integrity drive our commitment to
                delivering reliable geotechnical solutions while maintaining the
                highest professional and ethical standards.
              </p>
            </div>
          </div>

          {/* Right Column - Why Choose VGE Dark Card */}
          <div
            className="animate-fade-in h-full"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-gradient-to-br from-vge-blue-dark to-vge-blue-deep text-white p-8 rounded-2xl shadow-2xl h-full flex flex-col">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">
                Why Choose VGE?
              </h3>

              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vge-orange rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Expert Team</h4>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      Highly qualified engineers with decades of experience in
                      complex geotechnical challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vge-orange rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Advanced Technology
                    </h4>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      State-of-the-art equipment and testing facilities with
                      cutting-edge innovation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vge-orange rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Global Experience
                    </h4>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      The imaginative Pioneers of Geotechnical Engineering
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vge-orange rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Quality Assurance
                    </h4>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      Rigorous quality control processes ensuring reliable and
                      accurate results for every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in" style={{animationDelay: '0.5s'}}>
          {[
            { number: "25+", label: "Years Experience", color: "from-vge-blue-dark to-vge-blue-deep" },
            { number: "500+", label: "Projects Completed", color: "from-vge-orange to-vge-orange-light" },
            { number: "50+", label: "Countries Served", color: "from-vge-brown to-vge-brown-light" },
            { number: "100+", label: "Expert Team", color: "from-vge-blue-light to-vge-blue-sky" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`bg-gradient-to-br ${stat.color} text-white p-4 rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-2xl`}>
                <div className="text-2xl font-display font-bold mb-1">{stat.number}</div>
                <div className="text-xs opacity-90 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="py-2 px-4 max-w-7xl mx-auto">
          {/* Upper Text Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 mt-6">
            <h2 className="text-4xl font-display font-bold text-vge-blue-dark mb-4">
              Discover Our Work in Action
            </h2>
            <p className="text-gray-600 text-lg">
              See how our cutting-edge geotechnical solutions are applied across
              real-world projects.
            </p>
          </div>

          {/* Videos Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((num) => (
              <video
                key={num}
                controls
                className="w-full h-64 object-cover rounded-xl shadow-md"
              >
                <source src={`sample${num}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>

          {/* Bottom Heading */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-semibold text-vge-blue-dark">
              The Imaginative Pioneers of Geotechnical Engineering
            </h3>
          </div>

          {/* Image Translator / Slider */}
          <div className="overflow-hidden relative w-full max-w-6xl mx-auto">
            <div className="whitespace-nowrap animate-scroll-x space-x-10">
              {["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"].map(
                (src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`slide-${idx}`}
                    className="inline-block w-64 h-60 object-fill rounded-xl border shadow-md"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
