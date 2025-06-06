import MuththaMazhaiSong from './MuththaMazhaiSong.mp3'
import ShreeHanumanChalisaSong from './ShreeHanumanChalisaSong.mp3'
import RcbAnthemSong from './RcbAnthemSong.mp3'
import JaatIntroSong from './JaatIntroSong.mp3'
import LoverSong from './LoverSong.mp3'
import ShakySong from './ShakySong.mp3'
import SaiyaaraSong from './SaiyaaraSong.mp3'
import STFUSong from './STFUSong.mp3'
import ZamanaLageSong from './ZamanaLageSong.mp3'

import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import clock_icon from './clock_icon.png'

import MuththaMazhai from './Muththa.jpeg'
import ShreeHanumanChalisa from './ShreeHanumanChalisa.jpeg'
import ZamanaLage from './ZamanaLage.jpeg'
import Shaky from './Shaky.jpeg'
import STFU from './STFU.jpeg'
import JaatIntro from './JaatIntro.jpeg'
import EasyLover from './EasyLover.jpeg'
import Saiyaara from './Saiyaara.jpeg'
import RCBAnthem from './RCBAnthem.jpeg'
import play_black_icon from './PlayBlack.ico'
import pause_black_icon from './PauseBlack.png'
import Pritam from './Pritam.jpeg'
import ArijitSingh from './ArijitSingh.jpeg'
import AnirudhRavichander from './AnirudhRavichander.jpeg'
import ARRahman from './ARRahman.png'
import SachinJigar from './SachinJigar.jpeg'
import UditNarayan from './UditNarayan.jpeg'
import VishalShekhar from './VishalShekhar.jpeg' 
import AtifAslam from './AtifAslam.jpeg'

import Top50Global from './Top50Global.jpg'
import Top50India from './Top50India.jpg'
import TopSongsGlobal from './TopSongsGlobal.jpg'
import TopSongsIndia from './TopSongsIndia.jpg'
import Viral50Global from './Top50Global.jpg'
import Viral50India from './Viral50India.jpg'



export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    clock_icon,
    MuththaMazhai,
    ShreeHanumanChalisa,
    ZamanaLage,
    Shaky,
    STFU,
    JaatIntro,
    EasyLover,
    Saiyaara,
    RCBAnthem,
    play_black_icon,
    pause_black_icon,
    Pritam,
    ArijitSingh,
    AnirudhRavichander,
    ARRahman,
    SachinJigar,
    UditNarayan,
    VishalShekhar,
    AtifAslam,
    Top50Global,
    Top50India,
    TopSongsGlobal,
    TopSongsIndia,
    Viral50Global,
    Viral50India,
    MuththaMazhaiSong,
    ShreeHanumanChalisaSong,
    RcbAnthemSong,
    JaatIntroSong,
    LoverSong,
    ShakySong ,
    SaiyaaraSong,
    STFUSong,
    ZamanaLageSong,
}   

export const albumsData = [
    {   
        id:0,
        name: "Top Songs Global",
        image: TopSongsGlobal,
        desc:"Your weekly update of the most played tracks right now - Global.",
        bgColor:"#44337a"
    },
    {   
        id:1,
        name: "Top Songs India",
        image: TopSongsIndia,
        desc:"Your weekly update of the most played tracks right now - India.",
        bgColor:"#742a2a"
    },
    {   
        id:2,
        name: "Top 50 Global",
        image: Top50Global,
        desc:"Your daily update of the most played tracks right now - Global.",
        bgColor:"#2a4365"
    },
    {   
        id:3,
        name: "Top 50 India",
        image: Top50India,
        desc:"Your daily update of the most played tracks right now - India.",
        bgColor:"#22543d "
    },
    {   
        id:4,
        name: "Viral 50 Global",
        image: Viral50Global,
        desc:"Your daily update of the most viral tracks right now - Global.",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Viral 50 India",
        image: Viral50India,
        desc:"Your daily update of the most viral tracks right now - India.",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Muththa Mazhai",
        image: MuththaMazhai,
        file: MuththaMazhaiSong,
        desc:"A.R. Rahman, Dhee, Siva Anantha",
        duration:"3:46" //
    },
    {
        id:1,
        name: "Shree Hanuman Chalisa",
        image: ShreeHanumanChalisa,
        file: ShreeHanumanChalisaSong,
        desc:"Hariharan",
        duration:"9:44"
    },
    {
        id:2,
        name: "Rcb Anthem",
        image: RCBAnthem,
        file: RcbAnthemSong,
        desc:"Grey Face",
        duration:"3:01"
    },
    {
        id:3,
        name: "Shaky",
        image: Shaky,
        file: ShakySong,
        desc:"Sanju Rathod, G-SPXRK",
        duration:"2:55"
    },
    {
        id:4,
        name: "Jaat Intro(feat. Pranjal Dahiya)",
        image: JaatIntro,
        file: JaatIntroSong,
        desc:"Sushin Shyam, Dabzee, Vinayak Sasikumar",
        duration:"2:24"
    },
    {
        id:5,
        name: "STFU",
        image: STFU,
        file: STFUSong,
        desc:"AP Dhillon, Shinda Kahlon",
        duration:"3:24"
    },
    {
        id:6,
        name: "Easy Lover",
        image: EasyLover,
        file: LoverSong,
        desc:"Miley Cirus",
        duration:"3:10"
    },
    {
        id:7,
        name: "Zamana Lage(From 'Metro...In Dino')",
        image: ZamanaLage,
        file: ZamanaLageSong,
        desc:"Pritam, Arijit Singh, Shashwat Singh, Qaisar-Ul-Jafri, Sandeep Srivastava",    
        duration: "3:16"
    },
    {
        id:8,
        name: "Saiyaara(From 'Saiyaara')",
        image: Saiyaara,
        file: SaiyaaraSong,
        desc:"Tanishk Bagchi, Faheem Abdullah, Arslan Nizami, Irshad kamil",    
        duration: "4:12"
    }
]

export const singerData = [
    {
        id:0,
        name: "Pritam",
        image: Pritam,
        
    },
    {
        id:1,
        name: "ARRahman",
        image: ARRahman,
        
    },
    {
        id:2,
        name: "Arijit Singh",
        image: ArijitSingh,
        
    },
    {
        id:3,
        name: "Sachin Jigar",
        image: SachinJigar,
        
    },
    {
        id:4,
        name: "Atif Aslam",
        image: AtifAslam,
        
    },
    {
        id:5,
        name: "Vishal Shekhar",
        image: VishalShekhar,
        
    },
    {
        id:6,
        name: "Anirudh Ravichander",
        image: AnirudhRavichander,
        
    },
    {
        id:7,
        name: "Udit Narayan",
        image: UditNarayan,
        
    },

    
]