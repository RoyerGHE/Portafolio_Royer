"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Instagram,
  Twitter,
  Globe,
  BookOpen,
  Award,
  FileText,
} from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("csharp")

  const csharpProjects = [
    {
      title: "Sistema de Inventarios",
      description: "Windows Forms + SQL Server",
      details: "Sistema CRUD completo para gestión de inventarios con reportes y validaciones.",
    },
    {
      title: "API REST de Usuarios",
      description: "ASP.NET Core + JWT",
      details: "Web API con autenticación JWT, documentación Swagger y operaciones CRUD.",
    },
    {
      title: "Aplicación de Tareas",
      description: "WPF + Entity Framework",
      details: "App de escritorio para gestión de tareas con interfaz moderna y base de datos local.",
    },
    {
      title: "Sistema de Ventas",
      description: "Console App + MySQL",
      details: "Aplicación de consola para gestión de ventas con conexión a base de datos MySQL.",
    },
    {
      title: "Calculadora Básica",
      description: "Windows Forms",
      details: "Calculadora con operaciones básicas y interfaz intuitiva para el usuario.",
    },
    {
      title: "Gestor de Biblioteca",
      description: "C# + SQLite",
      details: "Sistema para gestión de libros, préstamos y usuarios de una biblioteca.",
    },
  ]

  const pythonProjects = [
    {
      title: "Calculadora Científica",
      description: "Tkinter + Math",
      details: "Calculadora con funciones científicas avanzadas e interfaz gráfica intuitiva.",
    },
    {
      title: "Analizador de Datos",
      description: "Pandas + Matplotlib",
      details: "Script para análisis estadístico y visualización de datos con gráficos interactivos.",
    },
    {
      title: "Web Scraper",
      description: "BeautifulSoup + Requests",
      details: "Herramienta para extraer información de sitios web y exportar a CSV/JSON.",
    },
    {
      title: "Juego de Adivinanzas",
      description: "Pygame + Random",
      details: "Juego interactivo con interfaz gráfica, puntuaciones y diferentes niveles de dificultad.",
    },
    {
      title: "Gestor de Archivos",
      description: "OS + Shutil",
      details: "Script para organizar archivos automáticamente por tipo y fecha de creación.",
    },
    {
      title: "Bot de Telegram",
      description: "Python-telegram-bot",
      details: "Bot básico para Telegram con comandos personalizados y respuestas automáticas.",
    },
  ]

  const courses = [
    {
      title: "Fundamentos de C#",
      platform: "Plataforma Online",
      status: "Completado",
      description: "Curso completo sobre sintaxis, POO y desarrollo de aplicaciones en C#.",
      hasCertificate: true,
      statusColor: "bg-green-100 text-green-800",
    },
    {
      title: "Introducción a Python",
      platform: "Plataforma Online",
      status: "En progreso",
      description: "Aprendiendo sintaxis básica, estructuras de datos y programación orientada a objetos.",
      hasCertificate: false,
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      title: "Git y Control de Versiones",
      platform: "Plataforma Online",
      status: "Certificado",
      description: "Manejo de repositorios, branching, merging y colaboración en equipos.",
      hasCertificate: true,
      statusColor: "bg-green-100 text-green-800",
    },
    {
      title: "Bases de Datos SQL",
      platform: "Universidad",
      status: "Aprobado",
      description: "Diseño de bases de datos, consultas SQL y optimización de rendimiento.",
      hasCertificate: false,
      statusColor: "bg-purple-100 text-purple-800",
    },
    {
      title: "ASP.NET Core Web API",
      platform: "Udemy",
      status: "Completado",
      description: "Desarrollo de APIs RESTful con ASP.NET Core, Entity Framework y JWT.",
      hasCertificate: true,
      statusColor: "bg-green-100 text-green-800",
    },
    {
      title: "Python para Data Science",
      platform: "Coursera",
      status: "En progreso",
      description: "Análisis de datos con Pandas, NumPy y visualización con Matplotlib.",
      hasCertificate: false,
      statusColor: "bg-blue-100 text-blue-800",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Royer Gustavo Hidrobo</h1>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Contacto
            </Button>
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold">
            RH
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Royer Gustavo Hidrobo Eraso</h1>
          <p className="text-lg text-slate-600 mb-6">Desarrollador Junior | Estudiante Universitario</p>
          <div className="flex justify-center gap-3">
            <Button className="bg-slate-800 hover:bg-slate-700">
              <Mail className="w-4 h-4 mr-2" />
              Contáctame
            </Button>
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              Ver Proyectos
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 border-t">
          <h2 className="text-2xl font-bold mb-6">Sobre Mí</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-slate-600 mb-4">
                Estudiante universitario apasionado por la programación, con conocimientos en <strong>C#</strong> y
                aprendiendo <strong>Python</strong>. Actualmente busco oportunidades laborales para aplicar mis
                habilidades y crecer profesionalmente.
              </p>
              <div className="flex items-center gap-2 text-slate-500">
                <MapPin className="w-4 h-4" />
                <span>Disponible para trabajo remoto y presencial</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Buscando trabajo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Estudiante universitario</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Desarrollador Junior</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 border-t">
          <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Lenguajes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">C#</span>
                    <span className="text-sm text-slate-500">Intermedio</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-800 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Python</span>
                    <span className="text-sm text-slate-500">Principiante</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-600 h-2 rounded-full w-2/5"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Tecnologías
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.NET</Badge>
                  <Badge variant="secondary">ASP.NET</Badge>
                  <Badge variant="secondary">SQL Server</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Visual Studio</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 border-t">
          <h2 className="text-2xl font-bold mb-8 text-center">Mis Proyectos</h2>

          {/* Project Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 rounded-lg p-1 flex gap-1">
              <Button
                variant={activeTab === "csharp" ? "default" : "ghost"}
                onClick={() => setActiveTab("csharp")}
                className={`flex items-center gap-2 ${
                  activeTab === "csharp"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                <Code2 className="w-4 h-4" />
                Proyectos en C#
              </Button>
              <Button
                variant={activeTab === "python" ? "default" : "ghost"}
                onClick={() => setActiveTab("python")}
                className={`flex items-center gap-2 ${
                  activeTab === "python"
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                <Code2 className="w-4 h-4" />
                Proyectos en Python
              </Button>
            </div>
          </div>

          {/* Horizontal Scrollable Projects */}
          <div className="relative">
            {activeTab === "csharp" && (
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6 w-max animate-in fade-in duration-300">
                  {csharpProjects.map((project, index) => (
                    <Card
                      key={index}
                      className="w-80 flex-shrink-0 border-blue-200 hover:shadow-lg transition-all duration-200"
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center justify-between">
                          {project.title}
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">C#</Badge>
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 mb-4">{project.details}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="bg-transparent hover:bg-blue-50">
                            <Github className="w-3 h-3 mr-1" />
                            Código
                          </Button>
                          <Button size="sm" variant="ghost" className="hover:bg-blue-50">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "python" && (
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6 w-max animate-in fade-in duration-300">
                  {pythonProjects.map((project, index) => (
                    <Card
                      key={index}
                      className="w-80 flex-shrink-0 border-green-200 hover:shadow-lg transition-all duration-200"
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center justify-between">
                          {project.title}
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Python</Badge>
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 mb-4">{project.details}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="bg-transparent hover:bg-green-50">
                            <Github className="w-3 h-3 mr-1" />
                            Código
                          </Button>
                          <Button size="sm" variant="ghost" className="hover:bg-green-50">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Scroll indicator */}
            <div className="text-center text-sm text-slate-500 mt-2">
              ← Desliza horizontalmente para ver más proyectos →
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 border-t">
          <h2 className="text-2xl font-bold mb-6">Educación y Formación</h2>

          {/* University Education */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Educación Formal
            </h3>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Ingeniería en Sistemas</CardTitle>
                <CardDescription>Universidad • En curso</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-3">
                  Estudiante universitario enfocado en desarrollo de software y programación.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">POO</Badge>
                  <Badge variant="outline">Estructuras de Datos</Badge>
                  <Badge variant="outline">Base de Datos</Badge>
                  <Badge variant="outline">Ingeniería de Software</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Courses and Certifications - Horizontal Scroll */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-green-600" />
              Cursos y Certificaciones
            </h3>

            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6 w-max">
                {courses.map((course, index) => (
                  <Card key={index} className="w-80 flex-shrink-0 border-slate-200 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center justify-between">
                        {course.title}
                        <Badge className={course.statusColor}>{course.status}</Badge>
                      </CardTitle>
                      <CardDescription>{course.platform}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 mb-4">{course.description}</p>
                      <div className="flex gap-2">
                        {course.hasCertificate && (
                          <Button size="sm" variant="outline" className="bg-transparent hover:bg-slate-50">
                            <FileText className="w-3 h-3 mr-1" />
                            Ver Certificado
                          </Button>
                        )}
                        <Button size="sm" variant="ghost" className="hover:bg-slate-50">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Detalles
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Scroll indicator for courses */}
            <div className="text-center text-sm text-slate-500 mt-2">
              ← Desliza horizontalmente para ver más cursos →
            </div>
          </div>
        </section>

        {/* Contact Section - Redesigned */}
        <section className="py-12 border-t">
          <div className="border-2 border-slate-200 rounded-2xl p-8 bg-slate-50/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">¡Trabajemos Juntos!</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Estoy disponible para oportunidades como desarrollador junior. ¿Tienes un proyecto en mente? ¡Hablemos!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-slate-300 bg-white shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2 text-slate-800">
                    <Mail className="w-5 h-5 text-blue-600" />
                    Contacto Directo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-blue-50 border-blue-200 bg-transparent"
                  >
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    royer.hidrobo@email.com
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-green-50 border-green-200 bg-transparent"
                  >
                    <Phone className="w-4 h-4 mr-2 text-green-600" />
                    +593 XXX XXX XXX
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-slate-300 bg-white shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2 text-slate-800">
                    <Globe className="w-5 h-5 text-purple-600" />
                    Redes Sociales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start hover:bg-slate-50 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="justify-start hover:bg-blue-50 bg-transparent">
                      <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" className="justify-start hover:bg-pink-50 bg-transparent">
                      <Instagram className="w-4 h-4 mr-2 text-pink-600" />
                      Instagram
                    </Button>
                    <Button variant="outline" className="justify-start hover:bg-blue-50 bg-transparent">
                      <Twitter className="w-4 h-4 mr-2 text-blue-500" />
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8">
                <Mail className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t bg-slate-50 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500">
          <p>&copy; 2024 Royer Gustavo Hidrobo Eraso</p>
        </div>
      </footer>
    </div>
  )
}
