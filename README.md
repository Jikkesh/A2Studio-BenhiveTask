# <span style="color:blue">A2Studio - Interior Designing Shop</span>

## <span style="color:green">Description</span>

A2Studio is an interior designing shop where you can unleash your creativity to design beautiful interiors for your spaces.

## <span style="color:green">Installation</span>

Technologies and Frameworks Used:
- React (18)
- ASP.NET Core Web API (.NET 8)
- PostgreSQL (Deployed on Render Cloud Storage)
- Firebase (Cloud Image storing)
- Tailwind CSS 

To get started with A2Studio, follow these steps:

1. Clone the repository to your local machine:
git clone <repository-url>

2. Navigate to the project directory:
cd A2Studio

cd client

3. Install dependencies for the frontend:
npm install

Open Server on Visual Studio

4. Install NuGet packages for the backend:
dotnet restore


6. Set up PostgreSQL database and configure the connection string in `appsettings.json`:

or

ADDED LINK:
I alreaady setup PostgreSQL on Render which I added the link in appSettings.json. Can use that too.

FOR LOCAL:
Fill your connection string in Program.cs.
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=5432;Database=your_database;User Id=your_username;Password=your_password;"
  }
}

6. Can use the Postgres_Query_DB.sql for setting up DB.
   Added my images for products in Firebase which I done in that script.

7. Start the backend server:
Hit F5 to start the server
or
dotnet run

8. Start the frontend development server:
npm start


Thank you.
