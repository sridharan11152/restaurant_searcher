package controller;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.*; 

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import javax.swing.JOptionPane;

/**
 * Servlet implementation class Display_favourites
 */
@WebServlet("/Display_favourites")
public class Display_favourites extends HttpServlet {
	private static final long serialVersionUID = 1L;


	public Display_favourites() {
		super();

	}


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try
		{
			PrintWriter out = response.getWriter();
			String favourites="";

			JSONParser parser = new JSONParser(); 
			JSONArray a = (JSONArray) parser.parse(new FileReader("/home/sapient/Documents/Favourites.json"));
			ArrayList<String> list=new ArrayList<String>();
			for (Object o : a)
			{

				JSONObject person = (JSONObject) o;
				String name =(String) person.get("Name");
				favourites+=name;
				favourites+="qqqq";
				String address =(String) person.get("Address");
				favourites+=address;
				favourites+="qqqq";

			}
			out.print(favourites);
		}
		catch(Exception e) {
			e.printStackTrace();  
		};


	}
}
