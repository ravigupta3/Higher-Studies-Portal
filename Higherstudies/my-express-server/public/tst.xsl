<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
  <xsl:template match="/">


    <html>
      <style>
  body {
    background-image: linear-gradient(
      rgba(217, 177, 57, 0.7),
      rgba(237, 75, 75, 0.7)
    );

    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    background-color: #cdedfd;
    background-image: linear-gradient(
      319deg,
      #cdedfd 0%,
      #ffec82 37%,
      #ffcfd2 100%
    );

    animation-name: background-change;
    animation-iteration-count: infinite;
    animation-duration: 15s;
    animation-timing-function: ease-in-out;
    background-size: 400%;
    background-attachment: fixed;

    font-family: "Poppins", sans-serif;
    font-size: large;
    font-style: normal;
    font-weight: bold;

    text-align: center;
    text-decoration: none;
  }
.blink {
                animation: blinker 1.5s linear infinite;
                color: red;
                font-family: sans-serif;
            }
            @keyframes blinker {
                50% {
                    opacity: 0;
                }
            }
</style>
      <body>
        <center>
          <h1>Colleges, Fees and Year</h1>
          <marquee class="blink">All types of Registration will be closed by 12th Feb 2023...</marquee>
          <table border="1">
            <tr bgcolor="#9acd32">
              <th style="text-align:left">Title</th>
              <th style="text-align:left">Fees(in $)</th>
              <th style="text-align:left">Year of Establishement</th>
            </tr>
            <xsl:for-each select="catalog/cd">
              <tr>
                <td>
                  <xsl:value-of select="title" />
                </td>
                <td>
                  <xsl:value-of select="price" />
                </td>
                <td>
                  <xsl:value-of select="year" />
                </td>
              </tr>
            </xsl:for-each>
          </table>
        </center>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>