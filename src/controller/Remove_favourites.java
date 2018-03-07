package controller;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;


/**
 * Servlet implementation class Remove_favourites 
 */

@WebServlet("/Remove_favourites")
public class Remove_favourites extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public Remove_favourites() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		try {
			
            PrintWriter out = response.getWriter();
            
            
            /*Backend receives the name of the hotel to 
             * be removed from favourites
             */
			String restaurant_name = request.getParameter("id");
			JSONParser parser = new JSONParser();
			JSONArray a = (JSONArray) parser.parse(new FileReader("/home/sapient/Documents/Favourites.json"));
			
			
			/*
			 * Each hotel name is compared with the target hotel name and it is removed 
			 * from favourites when it matches
			 */
			for (int j = 0; j < a.size(); j++) 
			{
				
				JSONObject restaurant = (JSONObject) a.get(j);
				String current_restaurant_name = (String) restaurant.get("Name");
				if (restaurant_name.matches(current_restaurant_name))
					a.remove(j);
					
			}
			
            /*
             * The modified favourites Json file is then updated 
             */
			File file = new File("/home/sapient/Documents/Favourites.json");
			file.createNewFile();
			FileWriter fileWriter = new FileWriter(file);
			fileWriter.write(a.toJSONString());
			fileWriter.flush();
			fileWriter.close();

      } catch (Exception e) {
			e.printStackTrace();
		};
	}
}
