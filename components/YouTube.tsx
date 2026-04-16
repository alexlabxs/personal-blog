'use client';

interface YouTubeProps {
  videoId: string;
  title?: string;
}

export function YouTube({ videoId, title }: YouTubeProps) {
  return (
    <div className="my-6">
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
}