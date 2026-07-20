# Proyecto Final DevOps - Pipeline CI/CD Integral

## 📋 Descripción

Este proyecto corresponde al Trabajo Práctico Final de la materia **Infraestructura Cloud y DevOps**.

El objetivo es implementar un pipeline de Integración Continua y Despliegue Continuo (CI/CD) para una aplicación web, utilizando herramientas y buenas prácticas de DevOps.

El proyecto integra:

- Docker con imágenes optimizadas mediante Multi-Stage Builds.
- GitHub Actions para automatización del pipeline.
- Terraform para Infraestructura como Código (IaC).
- Kubernetes para el despliegue y administración de contenedores.
- Prometheus y Grafana para monitoreo y observabilidad.
- Análisis de seguridad mediante herramientas SAST y DAST.
- Estrategias FinOps para optimización de recursos y costos.

---

## 🚀 Tecnologías utilizadas

- React
- Node.js
- Docker
- GitHub Actions
- Terraform
- Kubernetes
- Prometheus
- Grafana
- OWASP ZAP
- Git

---

## 📁 Estructura del proyecto

```
.
├── .github/
│   └── workflows/
├── kubernetes/
├── monitoring/
├── terraform/
├── src/
├── public/
├── Dockerfile
├── .dockerignore
├── package.json
└── README.md
```

---

## ⚙️ Ejecución local

### Instalar dependencias

```bash
npm install
```

### Ejecutar la aplicación

```bash
npm run dev
```

o

```bash
npm start
```

(según la configuración del proyecto)

---

## 🐳 Docker

Construir la imagen:

```bash
docker build -t proyecto-devops .
```

Ejecutar el contenedor:

```bash
docker run -p 8080:80 proyecto-devops
```

---

## ☸️ Kubernetes

Los manifiestos se encuentran en la carpeta:

```
kubernetes/
```

Incluyen:

- Deployment
- Service
- Ingress
- Horizontal Pod Autoscaler (HPA)

Para desplegar:

```bash
kubectl apply -f kubernetes/
```

---

## 🏗️ Terraform

La infraestructura se define dentro de:

```
terraform/
```

Inicializar:

```bash
terraform init
```

Planificar:

```bash
terraform plan
```

Aplicar:

```bash
terraform apply
```

---

## 🔄 Pipeline CI/CD

El pipeline automatiza:

- Build de la aplicación
- Ejecución de pruebas
- Construcción de la imagen Docker
- Publicación en el Registry
- Provisionamiento mediante Terraform
- Despliegue en Kubernetes
- Análisis de seguridad (SAST y DAST)

---

## 📊 Monitoreo

Se utiliza:

- Prometheus para la recolección de métricas.
- Grafana para la visualización mediante dashboards.

---

## 🔒 Seguridad

El pipeline incorpora:

- Análisis estático del código (SAST)
- Análisis dinámico de la aplicación (DAST)

Además, se utilizan Secrets de GitHub para proteger las credenciales.

---

## 💰 FinOps

Se aplican estrategias para optimizar costos:

- Multi-Stage Builds
- Imágenes livianas
- Horizontal Pod Autoscaler
- Optimización de recursos de CPU y Memoria

---

## 📸 Evidencias

En la versión final se incorporarán:

- Capturas del pipeline ejecutándose.
- Capturas de Docker.
- Capturas de Kubernetes.
- Capturas de Prometheus.
- Capturas de Grafana.
- Capturas de la aplicación desplegada.

---

## 👨‍💻 Autor

Proyecto desarrollado como Trabajo Práctico Final del curso de Infraestructura Cloud y DevOps.