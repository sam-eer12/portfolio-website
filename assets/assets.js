import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import microchip from './microchip.png';
import image_text from './image-text.png';
import ui_ux from './ui-ux.png';
import coding from './coding.png';

export const assets = {
    coding,
    ui_ux,
    image_text,
    microchip,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Vigil AI',
        description: 'Yolov11 and OpenCV based object detection model',
        bgImage: '/work-1.jpg',
        link: 'https://github.com/sam-eer12/VigilAI-survillance-project',
        black:false,
    },
    {
        title: 'Ocenaus AI',
        description: 'AI based DNA classification model for marine species',
        bgImage: '/work-2.png',
        link: 'https://sih-project-uimw.vercel.app/dashboard',
        black:true,
    },
    {
        title: 'Chat App',
        description: 'Real time chat application using MERN stack and Socket.io',
        bgImage: '/work-3.png',
        link: 'https://github.com/sam-eer12/chat-app',
        black:true,
    },
    {
        title: 'Blog site',
        description: 'A responsive blog website built with MERN and Tailwind CSS offering admin control.',
        bgImage: '/work-4.png',
        link: 'https://amethyst-wave.vercel.app/',
        black:false,
    },
]

export const serviceData = [
    { icon: assets.coding, title: 'Web Development', description: 'Web development is the process of building, programming, and maintaining websites and web applications.', link: 'https://amethyst-wave.vercel.app/' },
    { icon: assets.image_text, title: 'Object Detection', description: 'Object detection is a computer vision task that involves identifying and locating objects within an image or video.', link: 'https://github.com/sam-eer12/object-detection-model-yolov8' },
    { icon: assets.ui_ux, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience. It involves understanding user needs and designing interfaces that are easy to use and visually appealing.', link: 'https://beginner-webdev-project.vercel.app/' },
    { icon: assets.microchip, title: 'AI/ML', description: 'AI/ML involves using algorithms and statistical models to enable machines to improve their performance on tasks through experience.', link: 'https://sih-project-uimw.vercel.app/' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React Js, Next Js, Python, Flask, C++, MERN, MySQL, Tensorflow, PyTorch' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Instrumentation and Control engineering, NSUT CGPA:7.55' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 12 projects in Web development and AI/ML' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];