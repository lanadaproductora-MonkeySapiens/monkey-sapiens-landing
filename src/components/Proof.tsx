import { TrendingUp, Users, Award } from 'lucide-react';

export default function Proof() {
  const stats = [
    {
      icon: Users,
      number: '100+',
      label: 'Marcas transformadas',
      detail: 'En 3 años'
    },
    {
      icon: TrendingUp,
      number: '3.5x',
      label: 'Crecimiento promedio',
      detail: 'En seguidores y engagement'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Satisfacción de clientes',
      detail: 'Tasa de retención'
    }
  ];

  return (
    <section className="py-20 px-4 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Números que hablan
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon size={40} className="mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
