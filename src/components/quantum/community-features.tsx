"use client";

import { useState } from "react";
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Trophy,
  Star,
  Clock,
  ThumbsUp,
  Send,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CommunityPost {
  id: string;
  user: {
    name: string;
    avatar: string;
    level: number;
    streak: number;
  };
  content: string;
  type: 'achievement' | 'progress' | 'tip' | 'question';
  timestamp: Date;
  likes: number;
  comments: number;
  liked: boolean;
  achievement?: {
    title: string;
    icon: string;
  };
  program?: {
    name: string;
    duration: number;
  };
}

interface CommunityFeaturesProps {
  className?: string;
}

export function CommunityFeatures({ className }: CommunityFeaturesProps) {
  const [activeTab, setActiveTab] = useState('feed');
  const [newComment, setNewComment] = useState('');

  const communityPosts: CommunityPost[] = [
    {
      id: '1',
      user: {
        name: 'Ana Silva',
        avatar: 'AS',
        level: 5,
        streak: 12
      },
      content: 'Acabei de completar minha primeira semana de sequência! O programa de sono profundo tem me ajudado muito. 😴',
      type: 'achievement',
      timestamp: new Date('2024-01-15T10:30:00'),
      likes: 24,
      comments: 8,
      liked: false,
      achievement: {
        title: 'Sequência de 7 dias',
        icon: '🔥'
      }
    },
    {
      id: '2',
      user: {
        name: 'Carlos Santos',
        avatar: 'CS',
        level: 3,
        streak: 5
      },
      content: 'Dica: Faço minha sessão de drenagem sempre após o trabalho. Ajuda muito a relaxar e reduzir o inchaço das pernas!',
      type: 'tip',
      timestamp: new Date('2024-01-15T09:15:00'),
      likes: 18,
      comments: 5,
      liked: true,
      program: {
        name: 'Drenagem Pernas Leves',
        duration: 15
      }
    },
    {
      id: '3',
      user: {
        name: 'Maria Costa',
        avatar: 'MC',
        level: 7,
        streak: 25
      },
      content: 'Alguém mais sente que o programa cervical funciona melhor pela manhã? Tenho sentido menos dor no pescoço.',
      type: 'question',
      timestamp: new Date('2024-01-15T08:45:00'),
      likes: 12,
      comments: 15,
      liked: false,
      program: {
        name: 'Alívio Cervical',
        duration: 10
      }
    },
    {
      id: '4',
      user: {
        name: 'João Oliveira',
        avatar: 'JO',
        level: 4,
        streak: 8
      },
      content: 'Mês incrível! Consegui 180 minutos de sessões e me sinto muito melhor. Obrigado Quantum Experience! 🙏',
      type: 'progress',
      timestamp: new Date('2024-01-14T20:30:00'),
      likes: 31,
      comments: 12,
      liked: true
    }
  ];

  const leaderboard = [
    { name: 'Maria Costa', level: 7, streak: 25, points: 2150, avatar: 'MC' },
    { name: 'Pedro Lima', level: 6, streak: 18, points: 1890, avatar: 'PL' },
    { name: 'Ana Silva', level: 5, streak: 12, points: 1650, avatar: 'AS' },
    { name: 'Carlos Santos', level: 4, streak: 8, points: 1420, avatar: 'CS' },
    { name: 'Você', level: 3, streak: 5, points: 1250, avatar: 'EU' }
  ];

  const getPostTypeColor = (type: CommunityPost['type']) => {
    switch (type) {
      case 'achievement': return 'text-yellow-400 bg-yellow-500/20';
      case 'progress': return 'text-green-400 bg-green-500/20';
      case 'tip': return 'text-blue-400 bg-blue-500/20';
      case 'question': return 'text-purple-400 bg-purple-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getPostTypeIcon = (type: CommunityPost['type']) => {
    switch (type) {
      case 'achievement': return Trophy;
      case 'progress': return Star;
      case 'tip': return ThumbsUp;
      case 'question': return MessageCircle;
      default: return MessageCircle;
    }
  };

  const handleLike = (postId: string) => {
    // Implementar lógica de like
    console.log('Like post:', postId);
  };

  const handleComment = (postId: string) => {
    if (newComment.trim()) {
      // Implementar lógica de comentário
      console.log('Comment on post:', postId, newComment);
      setNewComment('');
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Agora há pouco';
    if (diffHours < 24) return `${diffHours}h atrás`;
    return `${Math.floor(diffHours / 24)}d atrás`;
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Comunidade</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('feed')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              activeTab === 'feed'
                ? "bg-quantum-primary text-white"
                : "bg-quantum-secondary text-gray-400 hover:text-white"
            )}
          >
            Feed
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              activeTab === 'leaderboard'
                ? "bg-quantum-primary text-white"
                : "bg-quantum-secondary text-gray-400 hover:text-white"
            )}
          >
            Ranking
          </button>
        </div>
      </div>

      {/* Feed Tab */}
      {activeTab === 'feed' && (
        <div className="space-y-4">
          {/* Create Post */}
          <div className="quantum-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-quantum-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">EU</span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Compartilhe seu progresso ou dica..."
                  className="w-full bg-quantum-muted rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-quantum-primary"
                />
              </div>
              <button className="p-2 bg-quantum-primary rounded-lg">
                <Send size={16} className="text-white" />
              </button>
            </div>
          </div>

          {/* Posts */}
          {communityPosts.map((post) => {
            const TypeIcon = getPostTypeIcon(post.type);
            
            return (
              <div key={post.id} className="quantum-card">
                {/* Post Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-quantum-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{post.user.avatar}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{post.user.name}</span>
                        <span className="text-xs bg-quantum-muted px-2 py-1 rounded-full text-gray-400">
                          Nível {post.user.level}
                        </span>
                        <span className="text-xs text-orange-400">
                          🔥 {post.user.streak}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock size={12} />
                        {formatTimeAgo(post.timestamp)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className={cn("p-1 rounded", getPostTypeColor(post.type))}>
                      <TypeIcon size={14} />
                    </div>
                    <button className="p-1">
                      <MoreHorizontal size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Achievement Badge */}
                {post.achievement && (
                  <div className="mb-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{post.achievement.icon}</span>
                      <span className="text-yellow-400 font-medium">{post.achievement.title}</span>
                    </div>
                  </div>
                )}

                {/* Program Info */}
                {post.program && (
                  <div className="mb-3 p-3 bg-quantum-muted rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-quantum-accent font-medium">{post.program.name}</span>
                      <span className="text-gray-400 text-sm">• {post.program.duration} min</span>
                    </div>
                  </div>
                )}

                {/* Post Content */}
                <p className="text-gray-300 mb-4">{post.content}</p>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-quantum-muted">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={cn(
                        "flex items-center gap-2 text-sm transition-colors",
                        post.liked ? "text-red-400" : "text-gray-400 hover:text-red-400"
                      )}
                    >
                      <Heart size={16} className={post.liked ? "fill-current" : ""} />
                      {post.likes}
                    </button>
                    
                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                      <MessageCircle size={16} />
                      {post.comments}
                    </button>
                    
                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                      <Share2 size={16} />
                      Compartilhar
                    </button>
                  </div>
                </div>

                {/* Comment Input */}
                <div className="mt-3 pt-3 border-t border-quantum-muted">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Adicione um comentário..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="flex-1 bg-quantum-muted rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-quantum-primary"
                    />
                    <button
                      onClick={() => handleComment(post.id)}
                      className="p-2 bg-quantum-primary rounded-lg"
                    >
                      <Send size={14} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-4">
          <div className="quantum-card">
            <h3 className="text-lg font-semibold text-white mb-4">Ranking Semanal</h3>
            
            <div className="space-y-3">
              {leaderboard.map((user, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-4 p-3 rounded-lg transition-all duration-200",
                    user.name === 'Você' 
                      ? "bg-quantum-primary/20 border border-quantum-primary/30" 
                      : "bg-quantum-muted hover:bg-quantum-muted/80"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                      index === 0 ? "bg-yellow-500 text-yellow-900" :
                      index === 1 ? "bg-gray-400 text-gray-900" :
                      index === 2 ? "bg-orange-500 text-orange-900" :
                      "bg-quantum-secondary text-gray-400"
                    )}>
                      {index + 1}
                    </div>
                    
                    <div className="w-10 h-10 bg-quantum-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{user.avatar}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        "font-medium",
                        user.name === 'Você' ? "text-quantum-accent" : "text-white"
                      )}>
                        {user.name}
                      </span>
                      <span className="text-quantum-accent font-bold">{user.points} pts</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>Nível {user.level}</span>
                      <span>🔥 {user.streak} dias</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Challenge */}
          <div className="quantum-card border-2 border-quantum-accent/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-quantum-accent/20 rounded-lg">
                <Trophy size={20} className="text-quantum-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Desafio da Semana</h3>
                <p className="text-sm text-gray-400">Complete 5 sessões diferentes</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Progresso</span>
                <span className="text-white">3/5 sessões</span>
              </div>
              <div className="w-full bg-quantum-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-2 rounded-full w-3/5"></div>
              </div>
              <p className="text-xs text-gray-400">Recompensa: +200 pontos</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}