'use client';

interface TwitterProps {
  tweetId: string;
}

export function Twitter({ tweetId }: TwitterProps) {
  return (
    <div className="my-6">
      <blockquote className="twitter-tweet" data-theme="dark">
        <a href={`https://twitter.com/user/status/${tweetId}`}>Tweet</a>
      </blockquote>
    </div>
  );
}