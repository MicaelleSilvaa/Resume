import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MinhaImagem from './foto.jpg';

// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Image source={MinhaImagem} style={styles.imagem} />
      <Text style={styles.titulo}>Micaelle Silva</Text>
      <Text style={styles.textoPagina}>22 anos, estudante de Análise e Desenvolvimento de Sistemas e futura engenheira de software.</Text>
      <Text style={[styles.textoPagina, { marginTop: 20 }]}>Caçote - Recife/PE</Text>
      <Text style={styles.textoPagina}>micaellesilv4@gmail.com </Text>
      <Text style={styles.textoPagina}>(81) 99705.6165</Text>
      <Text></Text>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={[styles.titulo, {marginBottom: 20}]}>Sobre</Text>
      <Text style={[styles.textoPagina, { marginBottom: 20 }]}>Sou Micaelle Silva, uma entusiasta apaixonada por tecnologia. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas pelo Embarque Digital no Senac.</Text>
      <Text style={[styles.textoPagina, { marginBottom: 20 }]}>Minha jornada na programação começou em 2021, quando comecei o curso técnico de informática para internet pelo IFPE e me encantei com o mundo de desenvolvimento de software.</Text>
      
      <Text style={styles.titulo2}>Hard Skills</Text>
      <Text style={styles.textoPagina}>Programação: JavaScript, Java, Python, TypeScript.</Text>
      <Text style={styles.textoPagina}>Bancos de Dados: PostgreSQL, MySQL, Oracle.</Text>
      <Text style={styles.textoPagina}>Outras Ferramentas: Git, AWS, Firebase, Google Cloud</Text>

      <Text style={[styles.titulo2, { marginTop: 20 }]}>Soft Skills:</Text>
      <Text style={styles.textoPagina}>Inglês, trabalho em equipe, boa comunicação, criatividade, organização e curiosidade.</Text>
    </View>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={[styles.titulo, { marginBottom: 20 }]}>Formação acadêmica</Text>
      <Text style={styles.titulo2}>Ensino Superior</Text>
      <Text style={[styles.textoPagina, { marginBottom: 20 }]}>Cursando 3º período de Análise e Desenvolvimento de Sistemas – SENAC (Programa Embarque Digital – Porto Digital)</Text>
      <Text style={styles.titulo2}>Ensino Técnico</Text>
      <Text style={styles.textoPagina}>Informática para internet – IPI (IFPE Jaboatão)</Text>
    </View>
  );
};

const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={[styles.titulo, { marginBottom: 20 }]}>Experiência Profissional</Text>
      <Text style={styles.titulo2}>Liferay Latin America LTDA</Text>
      <Text style={styles.textoPagina}>Atribuições: Jovem aprendiz</Text>
      <Text style={styles.textoPagina}>Atividades: Inserida no setor de engenharia no time de upgrade, realizo a manutenção e automação dos principais produtos e/ou serviços. Especificação, desenvolvimento e testagem softwares, considerando requisitos de segurança e disponibilidade, além de auxiliar no desenvolvimento de componentes de produtos Liferay.</Text>
      <Text style={styles.textoPagina}>Período: 05/2023 - 06/2024</Text>

      <Text style={[styles.titulo2, { marginTop: 20 }]}>Bezerra Guindastes</Text>
      <Text style={styles.textoPagina}>Atribuições: Auxiliar administrativo</Text>
      <Text style={styles.textoPagina}>Atividades: Emissão de autorização de fornecimento, avaliação de fornecedor e solicitação de compra. Além disso, realizando compra de peças para caminhões/guindastes, compra de EPI's, material elétrico e itens para uso da equipe de manutenção e equipe administrativa.</Text>
      <Text style={styles.textoPagina}>Período: 01/2023 - 05/2023</Text>
    </View>
  );
};

const Pagina4 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={[styles.titulo, { marginBottom: 20 }]}>Experiência Informal</Text>
      <Text style={styles.titulo2}>Photocopia Gráfica Rápida</Text>
      <Text style={styles.textoPagina}>Atribuições: Atendimento e arte-finalista</Text>
      <Text style={styles.textoPagina}>Atividades: Atendimento ao público e tarefas como impressão A4 e A3, cópia de documentos, digitalização e digitação, pesquisa online, consulta SPC e Serasa, emissão de boletos diversos, emissão de NF pela Prefeitura do Recife, venda de matérias, entre outros serviços relacionados. Além disso, realizava suporte simples aos computadores e impressoras de uso interno da equipe, confecção de kit mídia para redes sociais e releituras diversas.</Text>
      <Text style={styles.textoPagina}>Período: 2015-2022</Text>
    </View>
  );
};


const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Sobre':
        return <Pagina1 />;
      case 'Formação Acadêmica':
        return <Pagina2 />;
      case 'Experiência Profissional':
        return <Pagina3 />;
      case 'Experiência Informal':
        return <Pagina4 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Currículo</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Sobre')}>
            <Text style={styles.menuItemText}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Formação Acadêmica')}>
            <Text style={styles.menuItemText}>Formação acadêmica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Experiência Profissional')}>
            <Text style={styles.menuItemText}>Experiência profissional</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Experiência Informal')}>
            <Text style={styles.menuItemText}>Experiência Informal</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 22,
  },
  titulo2: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  textoPagina: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: '100%',
    marginBottom: 20
  }
});

export default App;