"use client";

import { useState } from "react";
import { Gift, Percent, Clock, Users, Copy, Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Coupon {
  id: string;
  code: string;
  title: string;
  description: string;
  discount: number;
  type: 'percentage' | 'fixed';
  minPoints: number;
  maxUses: number;
  currentUses: number;
  expiresAt: Date;
  category: 'points' | 'achievement' | 'special';
  unlocked: boolean;
}

interface CouponSystemProps {
  userPoints: number;
  className?: string;
}

export function CouponSystem({ userPoints, className }: CouponSystemProps) {
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  const coupons: Coupon[] = [
    {
      id: '1',
      code: 'WELCOME10',
      title: 'Boas-vindas',
      description: '10% de desconto no primeiro mês',
      discount: 10,
      type: 'percentage',
      minPoints: 0,
      maxUses: 1,
      currentUses: 0,
      expiresAt: new Date('2024-12-31'),
      category: 'special',
      unlocked: true
    },
    {
      id: '2',
      code: 'STREAK7',
      title: 'Sequência de 7 dias',
      description: 'R$ 5,00 de desconto por manter sequência',
      discount: 5,
      type: 'fixed',
      minPoints: 200,
      maxUses: 1,
      currentUses: 0,
      expiresAt: new Date('2024-06-30'),
      category: 'achievement',
      unlocked: userPoints >= 200
    },
    {
      id: '3',
      code: 'POINTS500',
      title: 'Recompensa 500 pontos',
      description: '15% de desconto por fidelidade',
      discount: 15,
      type: 'percentage',
      minPoints: 500,
      maxUses: 1,
      currentUses: 0,
      expiresAt: new Date('2024-08-31'),
      category: 'points',
      unlocked: userPoints >= 500
    },
    {
      id: '4',
      code: 'MASTER20',
      title: 'Mestre Quantum',
      description: '20% de desconto para mestres',
      discount: 20,
      type: 'percentage',
      minPoints: 1000,
      maxUses: 3,
      currentUses: 0,
      expiresAt: new Date('2024-12-31'),
      category: 'achievement',
      unlocked: userPoints >= 1000
    },
    {
      id: '5',
      code: 'FRIEND50',
      title: 'Indique um Amigo',
      description: 'R$ 7,50 de desconto por indicação',
      discount: 7.5,
      type: 'fixed',
      minPoints: 100,
      maxUses: 5,
      currentUses: 0,
      expiresAt: new Date('2024-12-31'),
      category: 'special',
      unlocked: userPoints >= 100
    }
  ];

  const handleCopyCoupon = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCoupon(code);
      setTimeout(() => setCopiedCoupon(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar cupom:', err);
    }
  };

  const getCategoryIcon = (category: Coupon['category']) => {
    switch (category) {
      case 'points': return Star;
      case 'achievement': return Gift;
      case 'special': return Percent;
      default: return Gift;
    }
  };

  const getCategoryColor = (category: Coupon['category']) => {
    switch (category) {
      case 'points': return 'text-yellow-400 bg-yellow-500/20';
      case 'achievement': return 'text-green-400 bg-green-500/20';
      case 'special': return 'text-purple-400 bg-purple-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const formatDiscount = (coupon: Coupon) => {
    return coupon.type === 'percentage' 
      ? `${coupon.discount}%` 
      : `R$ ${coupon.discount.toFixed(2)}`;
  };

  const isExpiringSoon = (date: Date) => {
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  const availableCoupons = coupons.filter(c => c.unlocked);
  const lockedCoupons = coupons.filter(c => !c.unlocked);

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="quantum-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Cupons & Promoções</h2>
          <div className="flex items-center gap-2">
            <Gift size={20} className="text-quantum-accent" />
            <span className="text-quantum-accent font-bold">{availableCoupons.length} disponíveis</span>
          </div>
        </div>
        
        <div className="bg-quantum-muted rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Star size={20} className="text-yellow-400" />
            <div>
              <div className="text-white font-medium">Seus Pontos</div>
              <div className="text-yellow-400 font-bold">{userPoints} pontos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Coupons */}
      {availableCoupons.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Cupons Disponíveis</h3>
          
          <div className="grid gap-4">
            {availableCoupons.map((coupon) => {
              const CategoryIcon = getCategoryIcon(coupon.category);
              const isExpiring = isExpiringSoon(coupon.expiresAt);
              
              return (
                <div
                  key={coupon.id}
                  className={cn(
                    "quantum-card border-2 transition-all duration-300",
                    isExpiring ? "border-orange-500/50 bg-orange-500/5" : "border-quantum-accent/30"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn("p-3 rounded-lg", getCategoryColor(coupon.category))}>
                      <CategoryIcon size={24} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-white">{coupon.title}</h4>
                          <p className="text-sm text-gray-400 mt-1">{coupon.description}</p>
                        </div>
                        
                        <div className="text-right flex-shrink-0">
                          <div className="text-xl font-bold text-quantum-accent">
                            {formatDiscount(coupon)}
                          </div>
                          <div className="text-xs text-gray-400">desconto</div>
                        </div>
                      </div>
                      
                      {/* Coupon Code */}
                      <div className="mt-3 flex items-center gap-2">
                        <div className="bg-quantum-muted px-3 py-2 rounded-lg font-mono text-white text-sm">
                          {coupon.code}
                        </div>
                        <button
                          onClick={() => handleCopyCoupon(coupon.code)}
                          className="p-2 bg-quantum-primary rounded-lg hover:bg-quantum-primary/80 transition-colors"
                        >
                          {copiedCoupon === coupon.code ? (
                            <Check size={16} className="text-white" />
                          ) : (
                            <Copy size={16} className="text-white" />
                          )}
                        </button>
                      </div>
                      
                      {/* Coupon Info */}
                      <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users size={12} />
                          <span>{coupon.maxUses - coupon.currentUses} usos restantes</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span className={isExpiring ? "text-orange-400" : ""}>
                            Expira em {coupon.expiresAt.toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                      </div>
                      
                      {isExpiring && (
                        <div className="mt-2 text-xs text-orange-400 font-medium">
                          ⚠️ Expira em breve!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Locked Coupons */}
      {lockedCoupons.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Próximos Cupons</h3>
          
          <div className="grid gap-4">
            {lockedCoupons.map((coupon) => {
              const CategoryIcon = getCategoryIcon(coupon.category);
              const pointsNeeded = coupon.minPoints - userPoints;
              
              return (
                <div
                  key={coupon.id}
                  className="quantum-card border border-quantum-muted opacity-60"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-quantum-muted">
                      <CategoryIcon size={24} className="text-gray-500" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-gray-300">{coupon.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{coupon.description}</p>
                        </div>
                        
                        <div className="text-right flex-shrink-0">
                          <div className="text-xl font-bold text-gray-400">
                            {formatDiscount(coupon)}
                          </div>
                          <div className="text-xs text-gray-500">desconto</div>
                        </div>
                      </div>
                      
                      <div className="mt-3 bg-quantum-muted rounded-lg p-3">
                        <div className="text-sm text-gray-400 mb-2">
                          Precisa de mais {pointsNeeded} pontos para desbloquear
                        </div>
                        <div className="w-full bg-quantum-dark rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min((userPoints / coupon.minPoints) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* How to Earn Points */}
      <div className="quantum-card border-2 border-quantum-primary/30">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-quantum-primary/20 rounded-full flex items-center justify-center mx-auto">
            <Star size={24} className="text-quantum-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Como Ganhar Pontos</h3>
            <div className="text-sm text-gray-400 space-y-1">
              <p>• Complete sessões de massagem (+10 pontos)</p>
              <p>• Mantenha sequências diárias (+20 pontos)</p>
              <p>• Desbloqueie conquistas (+50-500 pontos)</p>
              <p>• Indique amigos (+100 pontos)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}