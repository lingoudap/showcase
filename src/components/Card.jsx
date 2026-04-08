export default function Card({ title, description, icon, gradient = 'from-blue-500 to-blue-600' }) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300`}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {icon && <div className="text-3xl mb-3">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-100 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
