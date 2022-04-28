import { ProjectCard } from "../../components/ProjectCard";
import styles from "./projects.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NextButton } from "../../components/NextButton";
import { NavButton } from "../../components/NavButton";

export default function Projects() {
  return (
    <div className={styles.main_container}>
      <NavButton />
      <div className={styles.pagename}>
        <p className={styles.pagename_name}>projects</p>
        <div className={styles.pagename_border} />
      </div>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.swiper}>
          <ProjectCard
            key={null}
            logo={"./projects/vivid_logo.webp"}
            name="vivid"
            tech_stack={["React Native", "Redux", "Cloudinary", "Firebase"]}
            image={"./projects/vivid_img.webp"}
            description="vivid is a social media app for android and ios where people can share
          images, like, comment and many more..."
            link={
              "https://play.google.com/store/apps/details?id=com.suman_biswas.vivid"
            }
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <ProjectCard
            key={null}
            logo={"./projects/moviezine_logo.svg"}
            name="moviezine"
            tech_stack={["Next", "GraphQl", "AWS", "Node", "MongoDB"]}
            image={"./projects/moviezine_img.webp"}
            description="website where everyone can share their
            favourite movie recommendations and see movies recommended by others"
            link={"https://moviezine.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <ProjectCard
            key={null}
            logo={"./projects/nutshell_logo.png"}
            name="nutshell"
            tech_stack={["React-Native", "GraphQl", "AWS", "Firebase"]}
            image={"./projects/nutshell_img.webp"}
            description="restaurant menu app"
            link={"https://github.com/sumanbiswas7/nutshell"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <ProjectCard
            key={null}
            logo={"./projects/portfolio_logo.png"}
            name="my portfolio"
            tech_stack={["Next Js", "Typescript", "Sass", "Firebase"]}
            image={"./projects/portfolio_img.webp"}
            description="you're going through me :)"
            link={"https://sumanbiswas.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <ProjectCard
            key={null}
            logo={"./projects/dogehub_logo.png"}
            name="dogehub"
            tech_stack={["React Js", "Firebase"]}
            image={"./projects/dogehub_img.webp"}
            description="dogehub webapp is based on the shiba inu
            meme became popular in 2013."
            link={"https://dogehub2021.netlify.app/"}
          />
        </SwiperSlide>
        <NextButton />
      </Swiper>
    </div>
  );
}
