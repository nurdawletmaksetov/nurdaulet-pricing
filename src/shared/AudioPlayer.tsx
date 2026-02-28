import {ArrowLeft2, ArrowRight2, Stop, Play} from "iconsax-reactjs";
import {useState, useEffect, useRef} from "react";
import FirstMusic from "@/assets/first-music.mp3";
import SecondMusic from "@/assets/second-music.mp3";

export const AudioPlayer = () => {
    const tracks = [
        {
            src: FirstMusic,
            title: "Solo Violin",
            artist: "Rafael Krux",
            cover:
                "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop&crop=faces",
        },
        {
            src: SecondMusic,
            title: "Liora",
            artist: "Jason Fervento",
            cover:
                "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop&crop=faces",
        },
    ];

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const current = tracks[index];

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.src = current.src;

        if (isPlaying) {
            audio.play().catch(() => {
            });
        }
    }, [index, current.src]);

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

    const formatTime = (sec?: number) => {
        if (!sec || isNaN(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div
            style={{
                position: "fixed",
                left: 0,
                right: 0,
                bottom: "12px",
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                padding: "0 12px",
                boxSizing: "border-box",
                pointerEvents: "none"
            }}
        >
            <div
                style={{
                    background:
                        "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(10px) saturate(120%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "14px 18px",
                    borderRadius: "10px",
                    width: "100%",
                    boxShadow: "0 8px 30px rgba(2,6,23,0.6)",
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    boxSizing: "border-box",
                    pointerEvents: "auto"
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
                            <div style={{fontWeight: 600, textWrap: 'wrap'}}>{current.title}</div>
                            <div style={{fontSize: "13px", opacity: 0.8, textWrap: 'wrap'}}>{current.artist}</div>
                        </div>

                        <div style={{marginLeft: "auto", display: "flex", gap: "8px"}}>
                            <button
                                onClick={() =>
                                    setIndex((index - 1 + tracks.length) % tracks.length)
                                }
                            >
                                <ArrowLeft2/>
                            </button>

                            <button onClick={togglePlay}>
                                {isPlaying ? <Stop/> : <Play/>}
                            </button>

                            <button
                                onClick={() =>
                                    setIndex((index + 1) % tracks.length)
                                }
                            >
                                <ArrowRight2/>
                            </button>
                        </div>
                    </div>

                    <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                        <div style={{fontSize: "12px", opacity: 0.8}}>
                            {formatTime(currentTime)}
                        </div>

                        <div
                            style={{
                                flex: 1,
                                position: "relative",
                                height: "6px",
                                background: "rgba(255,255,255,0.06)",
                                borderRadius: "999px",
                                overflow: "hidden",
                                cursor: "pointer",
                            }}
                            onClick={(e) => {
                                const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                                const pct = (e.clientX - rect.left) / rect.width;

                                if (audioRef.current && duration) {
                                    audioRef.current.currentTime = pct * duration;
                                }
                            }}
                        >
                            <div
                                style={{
                                    width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                                    height: "100%",
                                    background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
                                }}
                            />
                        </div>

                        <div style={{fontSize: "12px", opacity: 0.8}}>
                            {formatTime(duration)}
                        </div>
                    </div>
                </div>

                <audio
                    ref={audioRef}
                    onTimeUpdate={() =>
                        setCurrentTime(audioRef.current?.currentTime || 0)
                    }
                    onLoadedMetadata={() =>
                        setDuration(audioRef.current?.duration || 0)
                    }
                    onEnded={() =>
                        setIndex((index + 1) % tracks.length)
                    }
                />
            </div>
        </div>
    );
};