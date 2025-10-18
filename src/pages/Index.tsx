import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[#1a1f3a] to-background" />
        
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        <Card className="w-full max-w-md p-8 relative z-10 backdrop-blur-sm bg-card/80 border-2 border-primary/30 animate-scale-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-purple mb-4 animate-pulse-glow">
              <Icon name="Ticket" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
              Розыгрыши
            </h1>
            <p className="text-muted-foreground">Панель управления для администраторов</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <Icon name="Mail" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  className="pl-10 bg-background/50 border-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Пароль</Label>
              <div className="relative">
                <Icon name="Lock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 bg-background/50 border-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full gradient-purple text-white font-semibold py-6 text-lg hover-scale">
              Войти
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Нет аккаунта? <button className="text-primary hover:underline font-semibold">Зарегистрироваться</button>
          </div>
        </Card>
      </div>
    );
  }

  const stats = [
    { label: 'Активных розыгрышей', value: '12', icon: 'Sparkles', color: 'gradient-purple', change: '+3' },
    { label: 'Всего участников', value: '1,247', icon: 'Users', color: 'gradient-blue', change: '+124' },
    { label: 'Продано билетов', value: '3,891', icon: 'Ticket', color: 'gradient-orange', change: '+456' },
    { label: 'Призовой фонд', value: '₽2.4M', icon: 'Trophy', color: 'gradient-purple', change: '+18%' },
  ];

  const raffles = [
    { id: 1, name: 'Автомобиль Tesla Model 3', participants: 450, tickets: 1200, prize: '₽5,000,000', status: 'active', progress: 75 },
    { id: 2, name: 'iPhone 15 Pro Max', participants: 280, tickets: 800, prize: '₽150,000', status: 'active', progress: 60 },
    { id: 3, name: 'Путевка на Мальдивы', participants: 190, tickets: 500, prize: '₽300,000', status: 'pending', progress: 38 },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
    { id: 'raffles', label: 'Розыгрыши', icon: 'Sparkles' },
    { id: 'participants', label: 'Участники', icon: 'Users' },
    { id: 'tickets', label: 'Билеты', icon: 'Ticket' },
    { id: 'receipts', label: 'Чеки', icon: 'Receipt' },
    { id: 'prizes', label: 'Призы', icon: 'Trophy' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ];

  return (
    <div className="min-h-screen flex">
      <aside className="w-72 bg-sidebar border-r border-sidebar-border p-6 animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center">
            <Icon name="Ticket" size={24} className="text-white" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-xl text-sidebar-foreground">Розыгрыши</h2>
            <p className="text-xs text-muted-foreground">Админ-панель</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-lg'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
          <Icon name="Sparkles" size={24} className="text-primary mb-2" />
          <h3 className="font-semibold text-sm mb-1">Создать розыгрыш</h3>
          <p className="text-xs text-muted-foreground mb-3">Запустите новый розыгрыш за пару кликов</p>
          <Button size="sm" className="w-full gradient-purple text-white hover-scale">
            Создать
          </Button>
        </div>
      </aside>

      <main className="flex-1 p-8 bg-background overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
              {menuItems.find(item => item.id === activeTab)?.label}
            </h1>
            <p className="text-muted-foreground">
              {activeTab === 'dashboard' && 'Обзор всех показателей и активностей'}
              {activeTab === 'raffles' && 'Управление розыгрышами и конкурсами'}
              {activeTab !== 'dashboard' && activeTab !== 'raffles' && 'Раздел в разработке'}
            </p>
          </div>
          <Button className="gradient-purple text-white hover-scale">
            <Icon name="User" size={18} className="mr-2" />
            Профиль
          </Button>
        </div>

        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <Card key={idx} className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all hover-scale animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center`}>
                      <Icon name={stat.icon} size={24} className="text-white" />
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{stat.change}</Badge>
                  </div>
                  <div className="text-3xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-card border-2 border-primary/20">
              <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                Активные розыгрыши
              </h2>
              <div className="space-y-4">
                {raffles.map((raffle, idx) => (
                  <div key={raffle.id} className="p-5 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/30 transition-all hover-scale animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-foreground mb-1">{raffle.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Users" size={14} />
                            {raffle.participants} участников
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Ticket" size={14} />
                            {raffle.tickets} билетов
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-heading font-bold text-foreground mb-1">{raffle.prize}</div>
                        <Badge className={raffle.status === 'active' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}>
                          {raffle.status === 'active' ? 'Активен' : 'Ожидает'}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Прогресс продаж</span>
                        <span className="font-semibold text-foreground">{raffle.progress}%</span>
                      </div>
                      <Progress value={raffle.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'raffles' && (
          <div className="animate-fade-in">
            <Tabs defaultValue="active" className="space-y-6">
              <TabsList className="bg-card border border-primary/20">
                <TabsTrigger value="active">Активные</TabsTrigger>
                <TabsTrigger value="pending">Ожидают</TabsTrigger>
                <TabsTrigger value="completed">Завершенные</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active" className="space-y-4">
                {raffles.filter(r => r.status === 'active').map((raffle, idx) => (
                  <Card key={raffle.id} className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all hover-scale animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-xl mb-2">{raffle.name}</h3>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Icon name="Users" size={16} />
                            {raffle.participants} участников
                          </span>
                          <span className="flex items-center gap-2">
                            <Icon name="Ticket" size={16} />
                            {raffle.tickets} билетов
                          </span>
                          <span className="flex items-center gap-2">
                            <Icon name="Trophy" size={16} />
                            {raffle.prize}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                          <Icon name="Edit" size={16} className="mr-2" />
                          Редактировать
                        </Button>
                        <Button size="sm" className="gradient-purple text-white hover-scale">
                          <Icon name="Eye" size={16} className="mr-2" />
                          Открыть
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {!['dashboard', 'raffles'].includes(activeTab) && (
          <Card className="p-12 text-center bg-card border-2 border-primary/20 animate-scale-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-purple mb-4">
              <Icon name="Construction" size={40} className="text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-2">Раздел в разработке</h2>
            <p className="text-muted-foreground">Этот функционал скоро будет доступен</p>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Index;
