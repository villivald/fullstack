#include <iostream>

using namespace std;

int main()
{
    float kannan_pituus = 0;
    float korkeus = 0;
    cout << "Syötä kolmion kannan pituus: " << endl;
    cin >> kannan_pituus;
    cout << "Syötä kolmion korkeus: " << endl;
    cin >> korkeus;
    cout << "Kolmion pinta-ala on: " << (kannan_pituus * korkeus) / 2 << " metriä." << endl;

    return 0;
}

