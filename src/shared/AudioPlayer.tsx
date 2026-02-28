import {ArrowLeft, ArrowRight, Pause, Play} from "lucide-react";
import {useState, useEffect, useRef} from "react";
import FirstMusic from '../assets/first-music.mp3'
import SeconMusic from "../assets/second-music.mp3";

export const AudioPlayer = () => {
    const tracks = [
        {
            src: FirstMusic,
            title: "Rafael Krux - Solo Violin",
            artist: "",
            cover:
                "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop&crop=faces",
        },
        {
            src: SeconMusic,
            title: "onehoure",
            artist: "",
            cover:
                "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop&crop=faces",
        },
    ];

    const audioRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const current = tracks[index];

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = current.src;
            if (isPlaying) audioRef.current.play();
        }
    }, [index]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    };

    const formatTime = (sec) => {
        if (!sec || isNaN(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div
            style={{
                position: "fixed",
                left: "12px",
                right: "12px",
                bottom: "12px",
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "980px",
                    background:
                        "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(10px) saturate(120%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    boxShadow: "0 8px 30px rgba(2,6,23,0.6)",
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <div style={{width: "56px", height: "56px", borderRadius: "8px", overflow: "hidden"}}>
                    <img
                        src={current.cover}
                        alt="cover"
                        style={{width: "100%", height: "100%", objectFit: "cover"}}
                    />
                </div>

                <div style={{flex: 1, display: "flex", flexDirection: "column", gap: "8px"}}>
                    <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                        <div>
                            <div style={{fontWeight: 600}}>{current.title}</div>
                            <div style={{fontSize: "13px", opacity: 0.8}}>{current.artist}</div>
                        </div>

                        <div style={{marginLeft: "auto", display: "flex", gap: "8px"}}>
                            <button onClick={() => setIndex((index - 1 + tracks.length) % tracks.length)}><ArrowLeft/>
                            </button>
                            <button onClick={togglePlay}>{isPlaying ? <Pause/> : <Play/>}</button>
                            <button onClick={() => setIndex((index + 1) % tracks.length)}><ArrowRight/></button>
                        </div>
                    </div>

                    <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                        <div style={{fontSize: "12px", opacity: 0.8}}>{formatTime(currentTime)}</div>

                        <div
                            style={{
                                flex: 1,
                                position: "relative",
                                height: "6px",
                                background: "rgba(255,255,255,0.06)",
                                borderRadius: "999px",
                                overflow: "hidden"
                            }}
                            onClick={(e) => {
                                const rect = e.target.getBoundingClientRect();
                                const pct = (e.clientX - rect.left) / rect.width;
                                audioRef.current.currentTime = pct * duration;
                            }}
                        >
                            <div
                                style={{
                                    width: `${(currentTime / duration) * 100}%`,
                                    height: "100%",
                                    background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
                                }}
                            ></div>
                        </div>

                        <div style={{fontSize: "12px", opacity: 0.8}}>{formatTime(duration)}</div>
                    </div>
                </div>

                <audio
                    ref={audioRef}
                    onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                    onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                    onEnded={() => setIndex((index + 1) % tracks.length)}
                />
            </div>
        </div>
    );
};

